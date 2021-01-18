<template>
  <Popover placement="bottomLeft" action="click">
    <template slot="content">
      <router-link to="#">
        <PrinterIcon size="16" />
        <span>Printer</span>
      </router-link>
      <router-link to="#">
        <BookOpenIcon size="16" />
        <span>PDF</span>
      </router-link>
      <router-link to="#">
        <FileTextIcon size="16" />
        <span>Google Sheets</span>
      </router-link>
      <router-link to="#">
        <XIcon size="16" />
        <span>Excel (XLSX)</span>
      </router-link>
      <router-link to="#">
        <FileIcon size="16" />
        <span>CSV</span>
      </router-link>
    </template>
    <Button size="small" type="white">
      <DownloadIcon size="14" />
      Export
    </Button>
  </Popover>
</template>

<script>
import Popover from "../popup/Popup";
import { Button } from "./Buttons";
import {
  DownloadIcon,
  FileIcon,
  XIcon,
  FileTextIcon,
  BookOpenIcon,
  PrinterIcon,
} from "vue-feather-icons";

export default {
  name: "ExportButton",
  components: {
    Button,
    Popover,
    DownloadIcon,
    FileIcon,
    XIcon,
    FileTextIcon,
    BookOpenIcon,
    PrinterIcon,
  },
};
</script>
