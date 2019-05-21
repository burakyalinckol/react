import React from 'react';
import { Row, Col, Card } from 'antd';
const { Meta } = Card;

const Cards = props => {
  return (
    <>
      {console.log(props.characterData)};
      <div>
        <Row>
          {props.characterData.map(characterData => (
            <Col span={6} key={characterData.id}>
              <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src={characterData.image} />}
              >
                <Meta title={characterData.name} />
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};

export default Cards;
