import React from "react";

interface TableOfContentsProps {
  items: Array<{
    title: string;
    level: number;
  }>;
}

export const TableOfContents: React.FC<TableOfContentsProps> = ({ items }) => {
  return (
    <nav className="flex flex-col text-lg leading-7 text-black">
      <h2 className="text-2xl font-bold leading-8 md:mb-5">Table of contents</h2>
      {items.map((item, index) => (
        <a
          key={index}
          href={`#${item.title.toLowerCase().replace(/\s+/g, "-")}`}
          className={`px-${item.level } py-3 ${
            item.level === 1 ? "font-bold bg-zinc-100" : ""
          }`}
        >
          {item.title}
        </a>
      ))}
    </nav>
  );
};


interface ContentSectionProps {
  title: string;
  level: number;
  children: React.ReactNode;
}

export const ContentSection: React.FC<ContentSectionProps> = ({
  title,
  level,
  children,
}) => {
  const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;
  const headingClasses = {
    2: "text-5xl font-bold leading-[57.6px] max-md:max-w-full max-md:text-4xl",
    3: "mt-10 text-4xl font-bold leading-10 max-md:max-w-full",
    4: "mt-10 text-3xl font-bold leading-10 max-md:max-w-full",
    5: "mt-9 text-2xl font-bold leading-8 max-md:max-w-full",
    6: "mt-14 text-xl font-bold leading-7 max-md:mt-10 max-md:max-w-full",
  };

  return (
    <section className="mt-4 max-md:max-w-full">
      <HeadingTag
        id={title.toLowerCase().replace(/\s+/g, "-")}
        className={headingClasses[level as keyof typeof headingClasses]}
      >
        {title}
      </HeadingTag>
      {children}
    </section>
  );
};



interface BlockquoteProps {
  quote: string;
}

export const Blockquote: React.FC<BlockquoteProps> = ({ quote }) => {
  return (
    <blockquote className="flex gap-5 mt-14 text-xl leading-7 bg-white bg-opacity-0 max-md:flex-wrap max-md:mt-10">
      <div className="shrink-0 w-0.5 bg-black h-[84px]" />
      <p className="flex-1 italic max-md:max-w-full">{quote}</p>
    </blockquote>
  );
};



export const MainContent: React.FC = () => {
  return (
    <main className="flex flex-col grow pb-4 text-base leading-6 text-black max-md:mt-10 max-md:max-w-full">
      <ContentSection title="Heading 2" level={2}>
        <p className="mt-4 font-bold max-md:max-w-full">
          Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla
          odio nisl vitae. In aliquet pellentesque aenean hac vestibulum turpis
          mi bibendum diam. Tempor integer aliquam in vitae malesuada fringilla.
        </p>
        <p className="mt-4 max-md:max-w-full">
          Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam
          suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis
          montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere
          vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat sapien
          varius id.
        </p>
      </ContentSection>

      <ContentSection title="Heading 3" level={3}>
        <p className="mt-6 max-md:max-w-full">
          Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat
          mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu quis
          fusce augue enim. Quis at habitant diam at. Suscipit tristique risus,
          at donec. In turpis vel et quam imperdiet. Ipsum molestie aliquet
          sodales id est ac volutpat.
        </p>
        <p className="mt-4 max-md:max-w-full">
          Tristique odio senectus nam posuere ornare leo metus, ultricies.
          Blandit duis ultricies vulputate morbi feugiat cras placerat elit.
          Aliquam tellus lorem sed ac. Montes, sed mattis pellentesque suscipit
          accumsan. Cursus viverra aenean magna risus elementum faucibus
          molestie pellentesque. Arcu ultricies sed mauris vestibulum.
        </p>
      </ContentSection>

      <ContentSection title="Heading 4" level={4}>
        <p className="mt-5 max-md:max-w-full">
          Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id
          scelerisque est ultricies ultricies. Duis est sit sed leo nisl,
          blandit elit sagittis. Quisque tristique consequat quam sed. Nisl at
          scelerisque amet nulla purus habitasse.
        </p>
      </ContentSection>

      <ContentSection title="Heading 5" level={5}>
        <p className="mt-4 max-md:max-w-full">
          Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id
          scelerisque est ultricies ultricies. Duis est sit sed leo nisl,
          blandit elit sagittis. Quisque tristique consequat quam sed. Nisl at
          scelerisque amet nulla purus habitasse.
        </p>
      </ContentSection>

      <Blockquote quote="Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id. Non pellentesque congue eget consectetur turpis. Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt aenean tempus." />

      <ContentSection title="Heading 6" level={6}>
        <p className="mt-4 max-md:max-w-full">
          Nunc sed faucibus bibendum feugiat sed interdum. Ipsum egestas
          condimentum mi massa. In tincidunt pharetra consectetur sed duis
          facilisis metus. Etiam egestas in nec sed et. Quis lobortis at sit
          dictum eget nibh tortor commodo cursus.
        </p>
      </ContentSection>
    </main>
  );
};



const TableContent: React.FC<any> = ({ tableOfContentsItems }) => {
  return (
    <div className="flex flex-col justify-center px-16 py-20 bg-white max-md:px-5">
      <div className="mt-8 max-md:mr-1 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[37%] max-md:ml-0 max-md:w-full">
            <TableOfContents items={tableOfContentsItems} />
          </div>
          <div className="flex flex-col ml-5 w-[63%] max-md:ml-0 max-md:w-full">
            <MainContent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableContent;