type Admin = {
  tag: "ADMIN";
  name: string;
  kickCount: number;
};

type Member = {
  tag: "MEMBER";
  name: string;
  point: number;
};

type Guest = {
  tag: "GUEST";
  name: string;
  visitCount: number;
};

type User = Admin | Member | Guest;

function login(user: User) {
  switch (user.tag) {
    case "ADMIN": {
      console.log(`${user.name}님 현재까지 ${user.kickCount}명 추방했습니다`);

      break;
    }
    case "MEMBER": {
      console.log(`${user.name}님 현재까지 ${user.point}모았습니다`);
      break;
    }
    case "GUEST": {
      console.log(`${user.name}님 현재까지 ${user.visitCount}번 오셨습니다`);
      break;
    }
  }
}

/**
 * 복습겸 한가지 더 사례
 */

//비동기 작업의 결과를 처리하는 객체

type LoadingTask = {
  state: "Loading";
};
type FailedTask = {
  state: "Failed";
  error: {
    message: string;
  };
};
type SuccessTask = {
  state: "Success";
  response: {
    data: string;
  };
};

type AsyncTask = LoadingTask | FailedTask | SuccessTask;

//로딩중 => 콘솔에 로딩중 출력
// 실패 -> 실패: 에러메세지
//성공 -> 성공 : 데이터를 출력
function processResult(task: AsyncTask) {
  switch (task.state) {
    case "Loading": {
      console.log(" 로딩 중");
      break;
    }
    case "Failed": {
      console.log(`에러발생: ${task.error.message}`);
      break;
    }
    case "Success": {
      console.log(`성공 : ${task.response.data}`);
    }
  }
}

const loading: AsyncTask = {
  state: "Loading",
};

const failed: AsyncTask = {
  state: "Failed",
  error: {
    message: "오류 발생 원인은~~",
  },
};

const success: AsyncTask = {
  state: "Success",
  response: {
    data: "데이터~~",
  },
};
