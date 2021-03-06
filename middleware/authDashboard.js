import { appConfig } from "../env";

export default function ({ app, redirect }) {
  const cookieToken = app.$cookies.get(appConfig.nameToken) ? true : false

  if (!cookieToken) {
    redirect('/admin/login')
  }
}
