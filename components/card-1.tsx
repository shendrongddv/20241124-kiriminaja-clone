import { Code } from "lucide-react";

type Props = {
  id?: string;
  title?: string;
  body?: string;
};

export const Card1 = ({ title, body }: Props) => {
  return (
    <div className="flex h-full flex-col items-start justify-start gap-2 rounded-2xl bg-white p-4">
      <div className="flex aspect-square h-12 items-center justify-center rounded-full bg-slate-100 text-primary">
        <Code className="size-6" />
      </div>
      <h3 className="mt-2 text-xl font-bold">{title}</h3>
      <p className="pb-2 opacity-75">{body}</p>
    </div>
  );
};
