import React from "react";
import "./Product.css";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useStateValue } from "../../common/StateProvider";
import Rating from "@material-ui/lab/Rating";

const Product = ({ id, title, image, price, rating }) => {
  const [state, dispatch] = useStateValue();
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id,
        title,
        image,
        price,
        rating,
      },
    });
  };

  return (
    <div className="product">
      <Card>
        <CardActionArea>
          <img className="product__media" src={image} alt={title} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              &#8377; {price}
            </Typography>
            <Rating
              name="checkoutProduct__rating"
              className="checkoutProduct__rating"
              value={rating}
              precision={0.5}
              readOnly
            />
          </CardContent>
        </CardActionArea>
        <CardActions className="product__cardAction">
          <Button onClick={addToBasket} size="small" color="primary">
            Add to Cart
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default Product;
