//타입 별칭

type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};

let user: User = {
  id: 1,
  name: "이",
  nickname: " winter",
  birth: "1997.11.11",
  bio: "안녕하세요",
  location: "부천시",
};

let user2: User = {
  id: 2,
  name: "김",
  nickname: " winter",
  birth: "1990.03.31",
  bio: "안녕하세요",
  location: "서울시",
};

//인덱스 시그니처
type countryCodes = {
  [key: string]: string;
};

let countryCodes: countryCodes = {
  Korea: "ko",
  UnitedState: "us",
  UnitedKingdom: "uk",
};

type countryNumberCodes = {
  [key: string]: number;
  // korea: string;
};

let countryNumberCodes: countryNumberCodes = {};
