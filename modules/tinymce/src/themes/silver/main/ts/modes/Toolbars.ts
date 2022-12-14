import { Optional, Type } from '@ephox/katamari';

import Editor from 'tinymce/core/api/Editor';

import { UiFactoryBackstage } from '../backstage/Backstage';
import { RenderUiComponents, RenderUiConfig } from '../Render';
import OuterContainer from '../ui/general/OuterContainer';
import { identifyButtons } from '../ui/toolbar/Integration';

// Set toolbar(s) depending on if multiple toolbars is configured or not
const setToolbar = (editor: Editor, uiComponents: RenderUiComponents, rawUiConfig: RenderUiConfig, backstage: UiFactoryBackstage): void => {
  const comp = uiComponents.outerContainer;
  const toolbarConfig = rawUiConfig.toolbar;
  const toolbarButtonsConfig = rawUiConfig.buttons;

  // Check if toolbar type is a non-empty string array
  if (Type.isArrayOf(toolbarConfig, Type.isString)) {
    const toolbars = toolbarConfig.map((t) => {
      const config = { toolbar: t, buttons: toolbarButtonsConfig, allowToolbarGroups: rawUiConfig.allowToolbarGroups };
      return identifyButtons(editor, config, backstage, Optional.none());
    });
    OuterContainer.setToolbars(comp, toolbars);
  } else {
    OuterContainer.setToolbar(
      comp,
      identifyButtons(editor, rawUiConfig, backstage, Optional.none())
    );
  }
};

export { setToolbar };
