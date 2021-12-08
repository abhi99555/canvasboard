import { PluginComponent } from 'src/interfaces/plugin-component';

declare var $: any;

export class AddRightAlignComponent implements PluginComponent {
    constructor() {}
    // right Align Tag
    addHTMLCode(uid) {
        $(`#cb-buttons-${uid}`).append(`
      <!-- Right tag -->
      <div class="tool box1 mx-1" style="margin-bottom:5px;" title="Right Align">
        <button class="btn btn-light d-flex align-items-center w-100" id="add-right-align-box2-${uid}" style="padding: 0.05rem 0.75rem;">
           <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-text-right" fill="currentColor"
           xmlns="http://www.w3.org/2000/svg">
           <path fill-rule="evenodd"
            d="M6 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-4-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0
            1-.5-.5zm4-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-4-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0
            1-.5-.5z" />
          </svg>
          <span class="p-2">Right Align</span>
        </button>
      </div>
      `);
    }

    addClickFunction = (uid) => {
        // Adding Right Align Tag Click Function
        $(`#add-right-align-box2-${uid}`).click(() => {
            $(`#cb-box-2-${uid}`)
                .removeClass('text-left text-center')
                .addClass('text-right');
        });
    };
    // Right Aligned Component
    addToolBox = (uid) => {
        $(`#cb-box-2-${uid}`)
            .removeClass('text-left text-center')
            .addClass('text-right');
    };
}
