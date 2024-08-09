/* 
This function returns the users unique id.
USECASE: 
import getSessionID from "path/to/file";
const uid = await getSessionID();
*/

import { authConfig } from "./auth";
import { getServerSession } from "next-auth";
export default async function getSessionID() {
    const session = await getServerSession(authConfig);
    return btoa((session?.user?.email)?.split("@")[0] || "default_user");
}