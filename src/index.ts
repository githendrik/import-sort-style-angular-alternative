import { IStyleAPI, IStyleItem } from "import-sort-style";

export default function(styleApi: IStyleAPI): IStyleItem[] {
  const {
    alias,
    and,
    dotSegmentCount,
    hasNoMember,
    isAbsoluteModule,
    isRelativeModule,
    moduleName,
    naturally,
  } = styleApi;

  // tslint:disable-next-line
  function isAngularModule({ moduleName }) {
    return moduleName.startsWith("@angular/");
  }

  return [
    // import "foo"
    { match: and(hasNoMember, isAbsoluteModule) },
    { separator: true },

    // import "./foo"
    { match: and(hasNoMember, isRelativeModule) },
    { separator: true },

    // import … from "@angular/";
    {
      match: isAngularModule,
      sort: moduleName(naturally),
      sortNamedMembers: alias(naturally),
    },
    { separator: true },

    // import … from "foo";
    {
      match: isAbsoluteModule,
      sort: moduleName(naturally),
      sortNamedMembers: alias(naturally),
    },
    { separator: true },

    // import … from "./foo";
    // import … from "../foo";
    {
      match: isRelativeModule,
      sort: [dotSegmentCount, moduleName(naturally)],
      sortNamedMembers: alias(naturally),
    },
    { separator: true },
  ];
}
