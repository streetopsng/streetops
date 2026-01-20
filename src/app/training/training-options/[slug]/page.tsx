import { formats } from "@/utils/formats";

type ProgramPageProps = {
  params: { slug: string };
};
export default function ProgramPage({ params }: ProgramPageProps) {
  const program = formats.find((f) => f.slug === params.slug);

  if (!program) {
    return <div>Program not found</div>;
  }

  return (
    <section className="space-y-8 lg:px-16 md:px-8 px-4 py-8">
      {/* Header */}
      <header className="text-center">
        <h1 className="text-3xl font-bold">
          {program.icon} {program.title}
        </h1>
        <p className="text-muted-foreground">{program.subtitle}</p>
        <p className="mt-2 font-medium">
          <span className="font-semibold">Duration</span>: {program.duration}
        </p>
      </header>

      {/* Best For */}
      <ListSection heading="Best For" items={program.bestFor} />
      {/* Custom Program – May Include */}
      {program.mayInclude && (
        <ListSection
          heading="Custom Program May Include"
          items={program.mayInclude}
        />
      )}

      {/* Custom Program – Focus Areas */}
      {program.focusAreas && (
        <ListSection
          heading="Possible Focus Areas"
          items={program.focusAreas}
        />
      )}

      {/* Course Options (Quick Hit only) */}
      {program.courseOptions && (
        <ListSection heading="Course Options" items={program.courseOptions} />
      )}

      {/* Program Structure (Multi-session only) */}
      {program.structure && (
        <ListSection heading="Program Structure" items={program.structure} />
      )}

      {/* Modules (Half-day, Full-day, Multi-session) */}
      {program.modules && <ModulesSection modules={program.modules} />}

      {/* Included */}
      <ListSection heading="What's Included" items={program.included} />

      {/* Outcome */}
      <OutcomeSection outcome={program.outcome} />
    </section>
  );
}

function ListSection({ heading, items }: { heading: string; items: string[] }) {
  return (
    <section>
      <h2 className="text-xl font-semibold mb-3">{heading}</h2>
      <ul className="list-disc pl-6 space-y-1">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

function ModulesSection({
  modules,
}: {
  modules: {
    title: string;
    topics: string[];
  }[];
}) {
  return (
    <section>
      <h2 className="text-xl font-semibold mb-4">Modules</h2>

      <div className="space-y-6">
        {modules.map((module, index) => (
          <div key={index}>
            <h3 className="font-medium mb-2">
              <span className="font-semibold"> Module {index + 1}</span>:{" "}
              {module.title}
            </h3>

            <ul className="list-disc pl-6 space-y-1">
              {module.topics.map((topic, idx) => (
                <li key={idx}>{topic}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

function OutcomeSection({ outcome }: { outcome: string }) {
  return (
    <section className="border-t pt-6">
      <h2 className="text-xl font-semibold mb-2">Outcome</h2>
      <p>{outcome}</p>
    </section>
  );
}
