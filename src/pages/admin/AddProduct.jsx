import React, { useState } from "react";
import Container from "../../hoc/Container";
import Input from "../../components/Input";
import Col from "../../hoc/Col";
import { ImageInputList } from "../../components/ImageInputList";
import useIsMobile from "../../hooks/useIsMobile";
import Button from "../../components/Button";
import logService from "../../services/logService";

const AddProduct = () => {
  const [data, setData] = useState({
    name: "",
    desc: "",
    images: [],
    inStock: "",
    size: "",
    color: "",
    price: "",
  });

  const isMobile = useIsMobile();

  const handleChange = (e) => {
    e.preventDefault();

    const name = e.target.name;
    const value = e.target.value;

    const newData = { ...data };

    newData[name] = value;

    setData(newData);
  };

  const addImage = (img) => {
    const newImages = [...data.images, img];
    setData({ ...data, images: newImages });
  };

  const removeImage = (img) => {
    const newImages = [...data.images].filter((image) => image.url !== img.url);
    setData({ ...data, images: newImages });
  };

  const handleSubmit = (e) => {
    // handle submint here
    e.preventDefault();
    logService.log(data);
  };

  const styles = {
    form: {
      display: "flex",
      flexDirection: "column",
      width: isMobile ? "100%" : "50%",
      alignItems: "center",
    },
  };

  return (
    <Container>
      <Col align="center">
        <h1>Add New Product</h1>
        <ImageInputList
          images={data.images}
          onAdd={addImage}
          onRemove={removeImage}
        />
        <form style={styles.form} onSubmit={handleSubmit}>
          <Input
            label="Name"
            placeHolder="Name"
            name="name"
            value={data.name}
            onChange={handleChange}
            required
          />
          <Input
            label="Description"
            placeHolder="Description"
            name="desc"
            value={data.desc}
            onChange={handleChange}
            required
          />
          <Input
            label="Color"
            placeHolder="Color"
            name="color"
            value={data.color}
            onChange={handleChange}
            required
          />
          <Input
            label="Size"
            placeHolder="Size"
            name="size"
            value={data.size}
            onChange={handleChange}
            required
          />
          <Input
            label="Price"
            placeHolder="Price"
            name="price"
            value={data.price}
            onChange={handleChange}
            required
            type="number"
          />
          <Input
            label="In Stock"
            placeHolder="In Stock"
            name="inStock"
            value={data.inStock}
            onChange={handleChange}
            required
            type="number"
          />
          <Button type="submit" title="Post" width={300} />
        </form>
      </Col>
    </Container>
  );
};

export default AddProduct;
