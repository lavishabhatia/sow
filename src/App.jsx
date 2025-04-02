import React, { useEffect, useState } from "react";
import Container from "./components/containers/Container";
import Section from "./components/containers/Section";
import ServiceCarousel from "./components/ServiceCarousel";
import PropertyCard from "./components/containers/PropertyCard";

function App() {
  const [data, setData] = useState(null);

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
        console.log(result);
        setData(result?.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Container>
        <div className=" space-y-[350px] my-[130px]">
          <Section title={"COMMUNITIES WE MANAGE"}>
            <div className="w-full flex flex-col items-center justify-center md:grid md:grid-cols-3 gap-[52px]">
              {data?.map((d, i) => {
                return (
                  <PropertyCard
                    image={d?.image_url}
                    title={d?.post_title}
                    description={d?.post_excerpt}
                  />
                );
              })}
            </div>
          </Section>
          <Section title={"OUR SERVICES"}>
            <ServiceCarousel data={data} />
          </Section>
        </div>
      </Container>
    </>
  );
}

export default App;
