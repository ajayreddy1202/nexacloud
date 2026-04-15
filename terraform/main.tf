terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

provider "aws" {
  region = "ap-south-1"
}

resource "aws_security_group" "nexacloud_sg" {
  name        = "nexacloud-sg"
  description = "NexaCloud security group"

  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 8000
    to_port     = 8005
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 9090
    to_port     = 9090
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 3000
    to_port     = 3000
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

resource "aws_instance" "nexacloud_server" {
  ami           = "ami-0f58b397bc5c1f2e8"
  instance_type = "t3.small"
  key_name      = "nexacloud-key"

  vpc_security_group_ids = [aws_security_group.nexacloud_sg.id]

  user_data = <<-EOF
    #!/bin/bash
    apt update -y
    apt install docker.io docker-compose git -y
    systemctl start docker
    systemctl enable docker
    usermod -aG docker ubuntu
    cd /home/ubuntu
    git clone https://github.com/ajayreddy1202/nexacloud.git
    cd nexacloud
    docker-compose up -d
  EOF

  tags = {
    Name    = "nexacloud-server"
    Project = "NexaCloud"
    Env     = "production"
  }
}

output "public_ip" {
  value = aws_instance.nexacloud_server.public_ip
}
