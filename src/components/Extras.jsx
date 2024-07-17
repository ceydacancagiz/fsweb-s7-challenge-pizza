import React from 'react';
import { Col, Input, Label, Row } from 'reactstrap';

export default function Extras(props) {
  const { form, extras, errors, handleChange } = props;

  const chunkArray = (arr, size) => {
    return Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
      arr.slice(i * size, i * size + size)
    );
  };

  const chunkedExtras = chunkArray(extras, 3);

  return (
    <>
      {chunkedExtras.map((row, rowIndex) => (
        <Row key={rowIndex} className="g-0 my-2">
          {row.map((item, colIndex) => (
            <Col
              className="gray-text mx-2"
              check
              key={rowIndex * 3 + colIndex}
            >
              <Input
                id={`extra${rowIndex * 3 + colIndex}`}
                name="extras"
                type="checkbox"
                value={item}
                checked={form.extras.includes(item)}
                onChange={handleChange}
                style={{backgroundColor:'#faf7f2'}}
              />
              <Label htmlFor={`extra${rowIndex * 3 + colIndex}`} check>
                <span className="mx-2">{item}</span>
              </Label>
            </Col>
          ))}
        </Row>
      ))}
    </>
  );
}