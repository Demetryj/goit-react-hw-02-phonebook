import { Label, Input } from './FilterStyled';

export const Filter = ({ value, onChangeFilter }) => {
  return (
    <Label htmlFor="filterId">
      Find contacts by name
      <Input
        id="filterId"
        type="text"
        name="filter"
        value={value}
        onChange={onChangeFilter}
        placeholder=" "
      />
    </Label>
  );
};
