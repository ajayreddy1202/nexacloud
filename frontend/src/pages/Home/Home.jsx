import MainLayout from "../../layouts/MainLayout";
import Hero from "../../components/layout/Hero";
import Categories from "../../components/layout/Categories";
import ProductSection from "../../components/product/ProductSection";

function Home() {
  return (
    <MainLayout>
      <Hero />
      <Categories />
      <ProductSection />
    </MainLayout>
  );
}

export default Home;