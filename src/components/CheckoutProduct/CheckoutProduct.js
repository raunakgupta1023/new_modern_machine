import React from "react";
import "./CheckoutProduct.css";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Rating from "@material-ui/lab/Rating";
import { useStateValue } from "../../common/StateProvider";

const CheckoutProduct = ({ id, title, image, price, rating }) => {
  const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="checkoutProduct">
      <Card className="checkoutProduct__card">
        <CardActionArea>
          <img className="checkoutProduct__media" src={image} alt={title} />
        </CardActionArea>
        <CardActions className="checkoutProduct__cardAction">
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography
              className="checkoutProduct__rating"
              variant="body2"
              color="textSecondary"
              component="p"
            >
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
          <Button onClick={removeFromBasket} size="small" color="primary">
            Remove from Cart
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default CheckoutProduct;
