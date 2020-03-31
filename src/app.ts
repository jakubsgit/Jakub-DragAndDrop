/// <reference path="models/drag-drop.tsx" />
/// <reference path="models/project.tsx" />
/// <reference path="state/project-status.tsx" />
/// <reference path="util/validation.tsx" />
/// <reference path="decorators/autobind.tsx" />
/// <reference path="components/project-input.tsx" />
/// <reference path="components/project-item.tsx" />
/// <reference path="components/project-list.tsx" />

namespace App {
  new ProjectInput();
  new ProjectList("active");
  new ProjectList("finished");
}
