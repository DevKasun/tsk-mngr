export type TaskStatus = "TODO" | "IN_PROGRESS" | "DONE";

export type Task = {
  id: string;
  status: TaskStatus;
  title: string;
  description: string;
};

export type TaskColumn = {
  id: TaskStatus;
  title: string;
};
