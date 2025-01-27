import { FieldValues } from "react-hook-form";
import { ZodType } from "zod";

export interface AuthFormProps<T extends FieldValues> {
  schema: ZodType<T>;
  defaultValues: T;
  formType: "SIGN_IN" | "SIGN_UP";
  onSubmit: (data: T) => Promise<{ success: boolean; data: T }>;
}
