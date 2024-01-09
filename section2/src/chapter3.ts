// object
let user: { id?: number; name: string } = {
  id: 1,
  name: "이정환",
};

//절대 바꾸면 안되는 값 지키기(Readonly)
let config: {
  readonly apiKey: string;
} = {
  apiKey: "MY API KEY",
};
