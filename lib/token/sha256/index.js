import { createHash } from "node:crypto";
export const tokenSha256 = (text) => {
    return createHash("sha256").update(text).digest("hex");
};
