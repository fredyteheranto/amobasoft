<template>
  <li
    class="calendar-day"
    :class="{
      'calendar-day--not-current': !day.isCurrentMonth,
      'calendar-day--today': isToday,
    }"
  >
    <span v-bind:class="verifyDay">{{ label }}</span>
  </li>
</template>

<script>
import dayjs from "dayjs";

export default {
  name: "CalendarMonthDayItem",

  props: {
    day: {
      type: Object,
      required: true,
    },

    isCurrentMonth: {
      type: Boolean,
      default: false,
    },

    isToday: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    label() {
      return dayjs(this.day.date).format("D");
    },
    verifyDay() {
      return 1 > 2 ? "fa-checkbox-marked" : "dayNotReserved";
    },
  },
};
</script>

<style scoped>
.calendar-day {
  position: relative;
  min-height: 100px;
  font-size: 16px;
  background-color: #fff;
  color: var(--grey-800);
  padding: 5px;
  width: 100%;
}

.calendar-day > span {
  display: flex;
  justify-content: center;
  align-items: center;
  right: 2px;
  border-radius: 30px;
  height: 80px;
  width: 80px;
}

.calendar-day--not-current {
  color: #9c8d8d;
}

.calendar-day--today {
  padding-top: 4px;
}

.calendar-day--today > span {
  color: #000;
  border-radius: 9999px;
  background-color: var(--grey-800);
}
</style>
