import React from "react";
import styled from "styled-components";

// Container
const Container = styled.div`
  position: relative;
`;

const Content2Xl = styled.div`
  max-width: 100rem;
  margin: 0 auto;
`;

// Heading
const SectionHeading = styled.h2`
  font-size: 4rem;
  font-weight: bold;
  text-align: center;
`;

// Description
const SectionDescription = styled.p`
  margin-top: 1rem;
  font-size: 1.6rem;
  font-weight: medium;
  line-height: 1.5;
  color: #888;
  max-width: 60rem;
`;

/* Hero */
const Row = styled.div`
  display: flex;
`;

const HeroRow = styled(Row)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 2rem;
  padding-bottom: 4rem;
  max-width: 100rem;
  margin: 0 auto;
  flex-wrap: wrap;
`;

const Column = styled.div`
  flex: 1;
`;

const TextColumn = styled(Column)`
  margin: 0 auto;
  margin-right: 0;
  max-width: 50rem;
  flex-shrink: 0;
`;

const Heading = styled(SectionHeading)`
  text-align: center;
  text-color: #333;
`;

const Description = styled(SectionDescription)`
  margin-top: 1.6rem;
  text-align: center;
  font-size: 1.8rem;
  color: #555;
  max-width: 50rem;
  margin: 0 auto;
  margin-left: 0;
`;

const FeatureList = styled.ul`
  margin-top: 3rem;
  line-height: 2;
  display: flex;
  flex-wrap: wrap;
  max-width: 50rem;
  margin: 0 auto;
  margin-left: 0;
  color: #a273ff;
`;

const Feature = styled.li`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  width: 100%;
  justify-content: center;
`;

const FeatureIcon = styled.img`
  width: 2rem;
  height: 2rem;
  color: #a273ff;  
`;

const FeatureText = styled.p`
  margin-left: 0.8rem;
  font-weight: medium;
  color: #555;
`;

const ImageColumn = styled(Column)`
  margin: 0 auto;
  margin-right: 0;
  position: relative;
  margin-top: 4rem;
  margin-left: 4rem;
`;

const ImageContainer = styled.div``;

const Image = styled.img`
  max-width: 100%;
  border-top-left-radius: 0.4rem;
  border-top-right-radius: 0.4rem;
`;

export default function Index({
	features = null,	
	heading = "Free Modern React Templates for every need.",
	description = "Easily customizable modern React UI Templates and Components built using TailwindCSS which are also lightweight and simple to setup. All components are modular and fully responsive for great mobile experience as well as big desktop screens.  Brand Colors are also fully customizable. Free for personal as well as commercial use.",
}) {
	features = [		
		`Inner Pages`,
		`Components`,
		"Uses TailwindCSS",
		"Fully Responsive",
		"Fully Customizable",
	];

	return (		
			<Container tw="bg-gray-100 -mx-8 -mt-8 pt-8 px-8">
				<Content2Xl>								
					<HeroRow>						
						<TextColumn>
							<Heading as="h1">{heading}</Heading>
							<Description>{description}</Description>
							<FeatureList>
								{features.map((feature, index) => (
									<Feature key={index}>
										<FeatureIcon src="/check-circle.svg"/>
										<FeatureText>{feature}</FeatureText>
									</Feature>
								))}
							</FeatureList>							
						</TextColumn>
						<ImageColumn>
							<ImageContainer>
								<Image src="/mainlandinggagehero.png" alt="Driving Instructor"/>
							</ImageContainer>
						</ImageColumn>
					</HeroRow>					
				</Content2Xl>
			</Container>
	);
}


