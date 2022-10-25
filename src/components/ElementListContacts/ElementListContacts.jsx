import { ElementList, Text, Button, Circle } from './ElementListContactsStyled';

export const ElementListContacts = ({ id, name, number, onClickDelete }) => {
  return (
    <ElementList>
      {/* <Circle></Circle> */}
      <Text>{name}:</Text>
      <Text>{number}</Text>
      <Button type="button" onClick={() => onClickDelete(id)}>
        Delete
      </Button>
    </ElementList>
  );
};
