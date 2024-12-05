type StatusType = "active" | "inactive";

interface IUser {
  name: string;
  status: StatusType;
}

const user: IUser = {
  name: "Vitor",
  status: "active",
};
interface IUserWithRole extends IUser {
  role: string;
}
const userWithRole: IUserWithRole = {
  name: "Jhon",
  status: "active",
  role: "admin",
};

// function checkUserStatus(status: StatusType): string | void {
//   console.log("User is active");
//   if (user.status === "active") {
//     return "User is active";
//   }
// }
// console.log(user.status);

interface UserFormCreate {
  name: string;
  email: string;
}

interface UserFormUpdate extends Omit<UserFormCreate, "name" | "email"> {
  id: string;
  name?: string;
  email?: string;
  created_at?: string;
  updated_at?: string;
}

const userToBeEdit: UserFormUpdate = {
  id: "",
};
