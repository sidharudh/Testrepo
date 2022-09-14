import { test as bastTets } from "@playwright/test";

type siddu={
    sid:string;

   pwd:string;
}

const abc=bastTets.extend<siddu>({
    sid:"guru.sharan@xyramsoft.com",
    pwd:"XyramSoft@0077",

}
)
export const test=abc;
export const expect=abc;