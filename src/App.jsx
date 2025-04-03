import React, { useEffect, useState } from "react";
import Container from "./components/containers/Container";
import Section from "./components/containers/Section";
import ServiceCarousel from "./components/ServiceCarousel";
import PropertyCard from "./components/containers/PropertyCard";
import SkeletonCard from "./components/containers/SkeletonCard";
import SkeletonCarousel from "./components/containers/SkeletonCarousel";
function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/wp-json/communities/all/", {
          method: "GET",
          headers: {
            Authorization: "Basic bmVoYTowI21JdkJCdzRBdWJoKTU5QXhEQ0hIQTU=",
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        });
        const result = await response.json();
        setData(result?.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <Container>
      <div className="space-y-20 my-10 md:my-20 lg:my-32">
        <Section title={"COMMUNITIES WE MANAGE"}>
          <div className="w-full flex flex-col items-center justify-center px-2 md:grid md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-10 lg:gap-14">
            {loading
              ? Array(6).fill(0).map((_, i) => <SkeletonCard key={i} />)
              : data?.map((d, i) => (
                  <PropertyCard
                    key={i}
                    image={d?.image_url}
                    title={d?.post_title}
                    description={d?.post_excerpt}
                  />
                ))}
          </div>
        </Section>
        <Section title={"OUR SERVICES"}>
          {loading ? <SkeletonCarousel /> : <ServiceCarousel data={data} />}
        </Section>
      </div>
    </Container>
  );
}

export default App;
