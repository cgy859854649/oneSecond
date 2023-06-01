import http from "./http.config";

export const login = (
  adminName: string,
  adminPwd: string,
  no: string,
  verifyCode: string
): Promise<any> =>
  http.post("/admin/login", {
    adminName,
    adminPwd,
    no,
    verifyCode,
  });
