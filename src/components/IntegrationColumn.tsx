import { type IntegrationsType } from "@/sections/Integrations";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

export default function IntegrationColumn(props: {
  integrations: IntegrationsType;
  className?: string;
}) {
  const { integrations, className } = props;
  return (
    <div className={twMerge("flex flex-col gap-4 pb-4", className)}>
      {integrations.map((integration) => (
        <div
          key={integration.name}
          className="border border-white/10 rounded-3xl p-6 bg-neutral-900"
        >
          <div className="flex justify-center">
            <Image
              src={integration.icon}
              alt={`${integration.name} icon`}
              className="size-24"
            />
          </div>
          <div className="mt-6 text-3xl text-center">{integration.name}</div>
          <p className="text-center mt-2 text-white/50">
            {integration.description}
          </p>
        </div>
      ))}
    </div>
  );
}
