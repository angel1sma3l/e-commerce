import React, { useState } from "react";
import ImageInput from "../../components/ImageInput";
import Container from "../../hoc/Container";
import Row from "../../hoc/Row";

const Dashboard = () => {
  const [image, setImage] = useState(null);
  return (
    <Container>
      Dashboard
      <Row>
        <ImageInput
          imageUrl={image}
          onSelectedImage={({ file, url }) => setImage(url)}
        />
      </Row>
    </Container>
  );
};

export default Dashboard;
