import { AlloyEvents, AlloyTriggers, CustomEvent, EventFormat, SystemEvents } from '@ephox/alloy';
import { Id } from '@ephox/katamari';

import { GetApiType, runWithApi } from '../../controls/Controls';

export interface OnMenuItemExecuteType<T> extends GetApiType<T> {
  readonly onAction: (itemApi: T) => void;
}

export const internalToolbarButtonExecute = Id.generate('toolbar.button.execute');

export interface InternalToolbarButtonExecuteEvent<T> extends CustomEvent {
  readonly buttonApi: T;
}

// Perform `action` when an item is clicked on, close menus, and stop event
const onToolbarButtonExecute = <T>(info: OnMenuItemExecuteType<T>): AlloyEvents.AlloyEventKeyAndHandler<EventFormat> =>
  AlloyEvents.runOnExecute((comp, _simulatedEvent) => {
    // If there is an action, run the action
    runWithApi(info, comp)((itemApi: T) => {
      AlloyTriggers.emitWith(comp, internalToolbarButtonExecute, {
        buttonApi: itemApi
      });
      info.onAction(itemApi);
    });
  });

const toolbarButtonEventOrder: Record<string, string[]> = {
  // TODO: use the constants provided by behaviours.
  [SystemEvents.execute()]: [ 'disabling', 'alloy.base.behaviour', 'toggling', 'toolbar-button-events' ]
};

export { onToolbarButtonExecute, toolbarButtonEventOrder, runWithApi };
