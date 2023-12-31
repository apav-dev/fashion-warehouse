import { ReactNode } from "react";
import classNames from "classnames";
import { Link } from "@yext/sites-components";

interface BreadcrumbsPropsDefault {
  breadcrumbs: Array<{ slug: string; name: string }>;
  separator?: ReactNode;
  className?: string;
  addAnalytics?: boolean;
  relativePrefixToRoot: string;
}

/*
 * The 'Breadcrumbs' component renders a breadcrumbs style navigation bar
 *
 * @example
 * ```
 * <Breadcrumbs breadcrumbs={defaultTransformer(streamBreadcrumbs)} />
 * ```
 *
 * @param {[{name: string, slug: string}]} breadcrumbs
 *          List of {crumbName, crumbUrl}
 * @param {ReactElement | string} separator
 *          between each breadcrumb - defaults to '/', also accepts any HTML element (<svg>, <img>, etc)
 */
const Breadcrumbs = (props: BreadcrumbsPropsDefault) => {
  const { breadcrumbs, className, separator = "/" } = props;

  return (
    <>
      {breadcrumbs?.length && (
        <nav className={classNames("", className)} aria-label="Breadcrumb">
          <ol className="flex flex-wrap">
            {breadcrumbs.map(({ name, slug }, idx) => {
              const isLast = idx === breadcrumbs.length - 1;

              return (
                <li key={idx} className="text-sm">
                  <Breadcrumb
                    name={name}
                    slug={isLast ? "" : props.relativePrefixToRoot + slug}
                    index={idx}
                    {...props}
                  />
                  {!isLast && <span className="mx-2">{separator}</span>}
                </li>
              );
            })}
          </ol>
        </nav>
      )}
    </>
  );
};

interface BreadcrumbProps {
  name: string;
  slug?: string;
  index: number;
  addAnalytics?: boolean;
}

const Breadcrumb = (props: BreadcrumbProps) => {
  const { name, slug } = props;

  if (slug) {
    return (
      <Link
        className="underline hover:no-underline"
        href={slug}
        eventName={props.addAnalytics ? "breadcrumb_" + props.index : ""}
      >
        <span>{name}</span>
      </Link>
    );
  }

  return <span>{name}</span>;
};

export default Breadcrumbs;
