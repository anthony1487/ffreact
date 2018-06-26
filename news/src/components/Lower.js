import React from "react";
import "./css/s_card.css";
// import { Card, CardImg, CardText, CardBody, CardLink,
//   CardTitle, CardSubtitle } from "reactstrap";
import {
  Card,
  CardPrimaryAction,
  CardMedia,
  CardAction,
  CardActions,
  CardActionButtons,
  CardActionIcons
} from "rmwc/Card";

import { Typography } from "rmwc/Typography";

const Lower = (props) => {
  return (
    <Card className= "cardContruct">
      <CardPrimaryAction>
        <CardMedia
          sixteenByNine
          style={{
            backgroundImage:
              'url(https://material-components-web.appspot.com/images/16-9.jpg)'
          }}
        />
        <div style={{ padding: '0 1rem 1rem 1rem' }}>
          <Typography use="headline6" tag="h2">
            Our Changing Planet
          </Typography>
          <Typography
            use="subtitle2"
            tag="h3"
            theme="text-secondary-on-background"
            style={{ marginTop: '-1rem' }}
          >
            by Kurt Wagner
          </Typography>
          <Typography use="body1" tag="div" theme="text-secondary-on-background">
            Visit ten places on our planet that are undergoing the biggest changes
            today.
          </Typography>
        </div>
      </CardPrimaryAction>
      <CardActions>
        <CardActionButtons>
          <CardAction>Read</CardAction>
          <CardAction>Bookmark</CardAction>
        </CardActionButtons>
        <CardActionIcons>
          <CardAction
            iconToggle
            on={{ label: 'Remove from favorites', content: 'favorite' }}
            off={{ label: 'Add to favorites', content: 'favorite_border' }}/>
          <CardAction icon use="share" />
        </CardActionIcons>
      </CardActions>
    </Card>
)
}
export default Lower;
