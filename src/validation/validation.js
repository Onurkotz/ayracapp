import * as yup from "yup";

const schema = yup.object().shape({
  bookName: yup.string().required(),
  author: yup.string().required(),
  page: yup.number().required().positive().integer(),
  genre: yup.string().required(),
});

export default schema;
