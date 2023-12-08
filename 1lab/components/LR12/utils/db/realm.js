import { createRealmContext } from "@realm/react";
import Crypto from "../../schemas/Crypto.schema";

export const RealmContext = createRealmContext({
    schema: [Crypto]
})