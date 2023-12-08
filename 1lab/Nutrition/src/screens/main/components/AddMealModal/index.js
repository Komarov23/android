import { Button, Icon, Modal } from "native-base";
import Input from "../../../../components/Input";
import React, { useEffect, useState } from "react";
import useMeal from "../../../../hooks/useMeal";
import { useSelector } from "react-redux";
import { selectNutrition } from "../../../../features/nutrition/nutrition.selectors";

const baseForm = () => ({
  name: "",
  description: "",
  protein: "",
  carbohydrates: "",
  fat: ""
})

const AddMealModal = ({ isOpen, closeModal }) => {
  const [form, setForm] = useState(baseForm());
  const [errors, setErrors] = useState(baseForm());

  const [kk, setKk] = useState(0);
  const [isLoading, setLoading] = useState(false);
  const nutrition = useSelector(selectNutrition);

  const { create: createMeal } = useMeal();

  useEffect(() => {
    const protein = parseInt(form.protein || '0') * 4.1,
          carbohydrates = parseInt(form.carbohydrates || '0') * 4.1,
          fat = parseInt(form.fat || '0') * 9.1

    setKk(parseFloat((protein + carbohydrates + fat).toFixed(2)));
  }, [form.protein, form.carbohydrates, form.fat]);

  const onChange = (field) => (value) => setForm((prevState) => ({
    ...prevState,
    [field]: value
  }));

  const createError = (field, error) => {
    setErrors(prevState => ({ ...prevState, [field]: error }))
    return false;
  }

  const isValid = () => {
    if (!form.name) return createError('name', 'Name field is required');
    if (!form.protein) return createError('protein', 'Protein field is required');
    if (!form.carbohydrates) return createError('carbohydrates', 'Carbohydrates field is required');
    if (!form.fat) return createError('fat', 'Fat field is required');

    return true;
  }

  const onSubmit = async () => {
    setLoading(true);
    setErrors(baseForm());
    if (isValid()) {
      await createMeal({
        _id: nutrition._id,
        name: form.name,
        kk,
        description: form.description
      })
      closeModal();
      setForm(baseForm());
    }
    setLoading(false);
  }

  return <Modal isOpen={isOpen} onClose={closeModal}>
    <Modal.Content>
      <Modal.CloseButton />
      <Modal.Header>{`${kk} kk`}</Modal.Header>
      <Modal.Body>
        <Input
          value={form.name}
          label='Meal name'
          placeholder='Meal name'
          onChange={onChange('name')}
          error={errors.name}
          isRequired
        />
        <Input
          value={form.protein}
          label='Protein'
          placeholder='Protein'
          onChange={onChange('protein')}
          error={errors.protein}
          keyboardType='numeric'
          isRequired
        />
        <Input
          value={form.carbohydrates}
          label='Carbohydrates'
          placeholder='Crotein'
          onChange={onChange('carbohydrates')}
          error={errors.carbohydrates}
          keyboardType='numeric'
          isRequired
        />
        <Input
          value={form.fat}
          label='Fat'
          placeholder='Fat'
          onChange={onChange('fat')}
          error={errors.fat}
          keyboardType='numeric'
          isRequired
        />
        <Input.TextArea
          value={form.description}
          label='Meal description'
          placeholder='Meal description'
          onChange={onChange('description')}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button.Group>
          <Button
            variant="outline"
            onPress={closeModal}
            isLoading={isLoading}
          >
            Close
          </Button>
          <Button
            isLoading={isLoading}
            onPress={onSubmit}
          >
            Add
          </Button>
        </Button.Group>
      </Modal.Footer>
    </Modal.Content>
  </Modal>
}

export default AddMealModal;
