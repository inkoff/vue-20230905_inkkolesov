import { defineComponent } from '../vendor/vue.esm-browser.js';
import { agendaItemIcons, agendaItemDefaultTitles } from '../meetupService.js';

export default defineComponent({
  name: 'MeetupAgendaItem',

  props: {
    agendaItem: {
      type: Object,
      required: true,
    },
  },

  computed: {
    agendaItemIconsType(){
      return agendaItemIcons[this.agendaItem.type]
    },
    agendaItemDefaultTitlesType(){

      return this.agendaItem.title ? this.agendaItem.title : agendaItemDefaultTitles[this.agendaItem.type]
    },
    agendaItemTime(){
      return this.agendaItem.startsAt + ' - ' + this.agendaItem.endsAt
    },
  },

  template: `
    <div class="agenda-item">
      <div class="agenda-item__col">
        <img :src="\`/assets/icons/icon-\${agendaItemIconsType}.svg\`" class="icon" :alt="agendaItemIconsType" />
      </div>
      <div class="agenda-item__col">{{ agendaItemTime }}</div>
      <div class="agenda-item__col">
        <h3 class="agenda-item__title">{{ agendaItemDefaultTitlesType }}</h3>
        <p class="agenda-item__talk">
          <span>{{ agendaItem.speaker }}</span>
          <span class="agenda-item__dot"></span>
          <span class="agenda-item__lang">{{ agendaItem.language }}</span>
        </p>
        <p>{{ agendaItem.description }}</p>
      </div>
    </div>`,
});
