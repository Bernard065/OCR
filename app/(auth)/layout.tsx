import SocialAuthForm from "@/components/forms/SocialAuthForm";
import Image from "next/image";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <section className="light-border background-light800_dark200 shadow-light100_dark100 min-w-full rounded-[10px] border px-4 py-10 shadow-md sm:min-w-[520px] sm:px-8">
        <div className="flex items-center justify-between gap-2">
          <div className="space-y-2.5">
            <h1 className="h2-bold text-dark100_light900">Join LindaCare</h1>
            <p className="paragraph-regular text-dark500_light400">
              Your home partner
            </p>
          </div>
          <Image
            src="/images/logo.jpg"
            width={60}
            height={60}
            alt="logo"
            className="object-contain bg-transparent"
          />
        </div>

        {children}

        <SocialAuthForm />
      </section>
    </main>
  );
}
