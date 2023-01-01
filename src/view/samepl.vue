<template>
    <v-container>
        <v-row class="fill-height" no-gutters>
            <v-col cols="12">
                <v-row class="fill-height">
                    <v-col cols="12">
                        <v-data-table class="elevation-1 row-pointer" dense :footer-props="footer_props" :headers="headers" :items="main_table" :loading="loading_health_declaration_list" loading-text="Loading... Please wait" :options="options" :search="search" :custom-filter="filterTable">
                            <template v-slot:top>
                                <v-row>
                                    <v-col cols="12" sm="4" md="4" lg="3" xl="3" class="pb-0 mb-0" align-self="center">
                                        <v-menu v-model="dateRangeStartMenu" :close-on-content-click="false" :nudge-right="40" transition="scale-transition" offset-y min-width="auto">
                                            <template v-slot:activator="{ on, attrs }">
                                                <v-text-field :value="computedDateRangeStart" label="Date Start" dense :error-messages="errmsg_date_range_start" filled :loading="loading_date_range_start" prepend-inner-icon="mdi-calendar" readonly v-bind="attrs" v-on="on" @click:prepend-inner="dateRangeStartMenu = true"></v-text-field>
                                            </template>
                                            <v-date-picker v-model="date_range_start" @input="dateRangeStartMenu = false" @change="DatePickerDateRangeStart_Change"></v-date-picker>
                                        </v-menu>
                                    </v-col>
                                    <v-col cols="12" sm="4" md="4" lg="3" xl="3" class="pb-0 mb-0" align-self="center">
                                        <v-menu v-model="dateRangeEndMenu" :close-on-content-click="false" :nudge-right="40" transition="scale-transition" offset-y min-width="auto">
                                            <template v-slot:activator="{ on, attrs }">
                                                <v-text-field :value="computedDateRangeEnd" label="Date End" dense :error-messages="errmsg_date_range_end" filled :loading="loading_date_range_end" prepend-inner-icon="mdi-calendar" readonly v-bind="attrs" v-on="on" @click:prepend-inner="dateRangeEndMenu = true"></v-text-field>
                                            </template>
                                            <v-date-picker v-model="date_range_end" @input="dateRangeEndMenu = false" @change="DatePickerDateRangeEnd_Change"></v-date-picker>
                                        </v-menu>
                                    </v-col>
    
                                    <v-spacer></v-spacer>
    
                                    <!-- <v-col cols="10" sm="8" md="6" lg="3" xl="3" offset="1" offset-sm="2" offset-md="3" offset-lg="0"> -->
                                    <v-col cols="12" sm="4" md="4" lg="3" xl="3" class="pb-0 mb-0">
                                        <v-text-field v-model="search" label="Search" class="mx-4"></v-text-field>
                                    </v-col>
                                </v-row>
                                <v-row class="my-0 pt-0">
                                    <v-col cols="12" sm="6" md="3" lg="3">
                                        <v-autocomplete label="Affiliation" v-model="affiliation_data.value" :items="affiliate_list" item-text="name" item-value="id" :loading="loading_emp_affiliate_list">
                                            <template slot="prepend-inner">
                                                <v-checkbox v-model="affiliation_data.show_column" @click.stop></v-checkbox>
                                            </template>
                                        </v-autocomplete>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="3" lg="3">
                                        <v-autocomplete label="Area" v-model="area_data.value" :items="area_list" item-text="name" item-value="id" :loading="loading_emp_area_list">
                                            <template slot="prepend-inner">
                                                <v-checkbox v-model="area_data.show_column" @click.stop></v-checkbox>
                                            </template>
                                        </v-autocomplete>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="3" lg="3">
                                        <v-autocomplete label="Schedule" v-model="schedule_data.value" :items="schedule_list" item-text="text" item-value="id" :loading="loading_emp_schedule_list">
                                            <template slot="prepend-inner">
                                                <v-checkbox v-model="schedule_data.show_column" @click.stop></v-checkbox>
                                            </template>
                                        </v-autocomplete>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="3" lg="3">
                                        <v-autocomplete label="Department" v-model="department_data.value" :items="department_list" item-text="name" item-value="id" :loading="loading_emp_department_list">
                                            <template slot="prepend-inner">
                                                <v-checkbox v-model="department_data.show_column" @click.stop></v-checkbox>
                                            </template>
                                        </v-autocomplete>
                                    </v-col>
                                    <v-col cols="12" sm="4" class="py-0 my-0">
                                        <v-switch v-model="is_red_flagged" label="Flagged as Covid-19 suspect" @click="SwitchRedFlag_Toggle"></v-switch>
                                    </v-col>
                                    <v-col cols="12" sm="4" class="py-0 my-0">
                                        <v-autocomplete label="Status" v-model="status_data.value" :items="status_list" item-text="name" :loading="loading_emp_status_list" return-object></v-autocomplete>
                                        <!-- <v-switch v-model="is_affiliate" label="Is Affiliate" @click="SwitchAffiliate_Toggle"></v-switch> -->
                                    </v-col>
                                    <v-expand-transition>
                                        <v-col class="py-0 my-0" cols="12" sm="4"> <!--  v-show="is_affiliate" -->
                                            <v-autocomplete label="Position" v-model="position_data.value" :items="position_list" item-text="name" item-value="id" :loading="loading_emp_position_list"></v-autocomplete>
                                        </v-col>
                                    </v-expand-transition>
                                </v-row>
                                <v-row class="my-0 pt-0 pb-6">
                                    <v-col cols="6" sm="3" md="3" lg="2" xl="2">
                                        <v-btn block color="blue" :loading="loading_search" rounded @click="ButtonSearch_Click"><v-icon>mdi-magnify</v-icon> Search</v-btn>
                                        <DisplayHealthDeclaration></DisplayHealthDeclaration>
                                    </v-col>
                                    <!-- bgh_ehd.dbo.usr_roles : 8-1 - Area Supervisor -->
                                    <v-col v-show="willShow('8-1')" cols="6" sm="3" md="3" lg="2" xl="2">
                                        <v-btn block color="green" rounded @click="ButtonByArea_Click">
                                            <span style="white-space: normal;">
                                                <v-icon>mdi-file-excel-outline</v-icon> Area
                                            </span>
                                        </v-btn>
                                    </v-col>
                                    <!-- bgh_ehd.dbo.usr_roles : 7-1 - Department Head -->
                                    <v-col v-show="willShow('7-1')" cols="6" sm="3" md="3" lg="2" xl="2">
                                        <v-btn block color="green" rounded @click="ButtonByDepartment_Click">
                                            <span style="white-space: normal;">
                                                <v-icon>mdi-file-excel-outline</v-icon> By Department
                                            </span>
                                        </v-btn>
                                    </v-col>
                                    <!-- bgh_ehd.dbo.usr_roles : 5-1 - IPCC Personnel; 6-1 - PHU Personnel -->
                                    <v-col v-show="willShow(['5-1', '6-1'])" cols="6" sm="3" md="3" lg="2" xl="2">
                                        <v-btn block color="green" rounded @click="ButtonToExcel_Click">
                                            <span style="white-space: normal;">
                                                <v-icon>mdi-file-excel-outline</v-icon> Masterlist
                                            </span>
                                        </v-btn>
                                    </v-col>
                                    <!-- bgh_ehd.dbo.usr_roles : 5-1 - IPCC Personnel; 6-1 - PHU Personnel -->
                                    <v-col v-show="willShow(['5-1', '6-1'])" cols="6" sm="3" md="3" lg="2" xl="2">
                                        <v-btn block color="green" rounded @click="ButtonBySuspects_Click">
                                            <span style="white-space: normal;">
                                                <v-icon>mdi-file-excel-outline</v-icon> Suspects
                                            </span>
                                        </v-btn>
                                    </v-col>
                                    <!-- bgh_ehd.dbo.usr_roles : 5-1 - IPCC Personnel -->
                                    <v-col v-show="willShow('5-1')" cols="6" sm="3" md="3" lg="2" xl="2">
                                        <v-btn block color="green" rounded @click="ButtonByName_Click">
                                            <span style="white-space: normal;">
                                                <v-icon>mdi-file-excel-outline</v-icon> By Name
                                            </span>
                                        </v-btn>
                                    </v-col>
                                </v-row>
                            </template>
    
                            <template v-slot:body="{ items }">
                                <tbody>
                                    <tr v-for="item in items" :key="item.id" :search="search" @mouseover="selectItem(item.id)" @mouseleave="unselectItem(item.id)" @click="DataTable_ClickRow(item)">
                                        <td class="" :class="[{ 'red_highlight': item.red_flag }]">{{ (item.employee || {}).full_name }}</td>
                                        <td v-show="department_data.show_column" class="" :class="[{ 'red_highlight': item.red_flag }]">{{ (item.department || {}).name }}</td>
                                        <td v-show="affiliation_data.show_column" class="" :class="[{ 'red_highlight': item.red_flag }]">{{ (item.employee_info || {}).affiliation }}</td>
                                        <td v-show="area_data.show_column" class="" :class="[{ 'red_highlight': item.red_flag }]">{{ (item.area || {}).name }}</td>
                                        <td v-show="schedule_data.show_column" class="" :class="[{ 'red_highlight': item.red_flag }]">{{ (item.schedule || {}).text }}</td>
                                        <td class="text-center" :class="[{ 'red_highlight': item.red_flag }]">{{ item.date_created }}</td>
                                        <!-- <td class="text-right">{{ item.something }}</td> -->
                                    </tr>
                                </tbody>
                            </template>
                        </v-data-table>
                    </v-col>
                </v-row>
    
                <!-- <v-row>
                    <v-col>
                        <v-btn color="red" fab x-small @click="ButtonDebug_Click"><v-icon>mdi-bug</v-icon></v-btn>
                    </v-col>
                </v-row> -->
            </v-col>
        </v-row>
    </v-container>
    </template>
    
    <script>
    import { mapActions, mapGetters } from "vuex";
    import DisplayHealthDeclaration from "../health_declaration/Display.vue";
    import XLSX from "xlsx";
    
    export default {
        name: "TheDashboard",
    
        components: { DisplayHealthDeclaration, },
    
        data() {
            return {
                title: "Dashboard",
    
                // table properties
                footer_props: {
                    'items-per-page-options': [15, 20, 30, 50, 100, -1],
                },
                options: {
                    itemsPerPage: 20,
                },
                search: "",
    
                loading_search: false,
    
                is_red_flagged: false,
    
                date_range_end: null,
                date_range_start: null,
                dateRangeStartMenu: false,
                dateRangeEndMenu: false,
    
                errldr_date_range_end: false,
                errldr_date_range_start: false,
    
                errmsg_date_range_end: '',
                errmsg_date_range_start: '',
    
                affiliation_data: {
                    value: 0,
                    attr: {
                        errctr: 0,
                        errldr: false,
                        errmsg: '',
                        src: '',
                    },
                    show_column: false,
                },
                area_data: {
                    value: 0,
                    attr: {
                        errctr: 0,
                        errldr: false,
                        errmsg: '',
                        src: '',
                    },
                    show_column: true,
                },
                department_data: {
                    value: 0,
                    attr: {
                        errctr: 0,
                        errldr: false,
                        errmsg: '',
                        src: '',
                    },
                    show_column: true,
                },
                position_data: {
                    value: 0,
                    attr: {
                        errctr: 0,
                        errldr: false,
                        errmsg: '',
                        src: '',
                    },
                },
                schedule_data: {
                    value: 0,
                    attr: {
                        errctr: 0,
                        errldr: false,
                        errmsg: '',
                        src: '',
                    },
                },
                status_data: {
                    value: { id: 0, },
                    attr: {
                        errctr: 0,
                        errldr: false,
                        errmsg: '',
                        src: '',
                    },
                },
            }
        },
    
        computed: {
            ...mapGetters('healthDeclaration', {
                health_declaration_list: 'getItemList',
                loading_health_declaration_list: 'isLoadingList',
    
                hovered_updatable_target: 'getHoveredUpdatableTarget',
                confirmed_updatable_target: 'getConfirmedUpdatableTarget',
            }),
            ...mapGetters('employeeAffiliate', {
                emp_affiliate_list: 'getItemList',
                loading_emp_affiliate_list: 'isLoadingList',
            }),
            ...mapGetters('employeeArea', {
                emp_area_list: 'getItemList',
                loading_emp_area_list: 'isLoadingList',
            }),
            ...mapGetters('employeeDepartment', {
                emp_department_list: 'getItemList',
                loading_emp_department_list: 'isLoadingList',
            }),
            ...mapGetters('employeePosition', {
                emp_position_list: 'getItemList',
                loading_emp_position_list: 'isLoadingList',
            }),
            ...mapGetters('employeeSchedule', {
                emp_schedule_list: 'getItemList',
                loading_emp_schedule_list: 'isLoadingList',
            }),
            ...mapGetters('employeeStatus', {
                emp_status_list: 'getItemList',
                loading_emp_status_list: 'isLoadingList',
            }),
            ...mapGetters('healthDeclaration', {
                health_declaration_exhibit: 'getItemExhibit',
            }),
            ...mapGetters('userClient', {
                is_authenticated: 'isAuthenticated',
                user_role_list: 'getRoles',
            }),
    
            hovered_target: {
                get() { return this.hovered_updatable_target; },
                set(value) { this.setConfirmedUpdatableTarget(value); },
            },
            confirmed_target: {
                get() { return this.confirmed_updatable_target; },
                set(value) { this.setConfirmedUpdatableTarget(value); },
            },
    
            affiliate_list() {
                const list = [{
                        abbreviation: "",
                        id: "0",
                        name: "All",
                    },
                    ...this.emp_affiliate_list]
    
                return list
            },
            area_list() {
                const list = [{
                        description: "",
                        id: "0",
                        name: "All",
                    },
                    ...this.emp_area_list]
    
                return list
            },
            department_list() {
                const list = [{
                        description: "",
                        id: "0",
                        name: "All",
                    },
                    ...this.emp_department_list]
    
                return list
            },
            position_list() {
                const list = this.is_affiliate ?
                    [
                        {
                            description: '',
                            id: '0',
                            name: 'All',
                        },
                        {
                            description: '',
                            id: '135',
                            name: 'CLINICAL INSTRUCTOR',
                        },
                        {
                            description: '',
                            id: '134',
                            name: 'STUDENT',
                        },
                    ]
                    :
                    [
                        {
                            description: '',
                            id: '0',
                            name: 'All',
                        },
                        ...this.emp_position_list,
                    ]
                return list
            },
            schedule_list() {
                const list = [{
                        description: '',
                        id: '0',
                        text: 'All',
                    },
                    ...this.emp_schedule_list]
    
                return list
            },
            status_list() {
                const list = [{
                    description: '',
                    id: '0',
                    name: 'All',
                },
                ...this.emp_status_list]
    
                return list
            },
            computedDateRangeEnd() { return this.formatDate(this.date_range_end) },
            computedDateRangeStart() { return this.formatDate(this.date_range_start) },
            is_affiliate() {  return this.status_data.value.name === 'Affiliate' },
            loading_date_range_end() { return this.errldr_date_range_end },
            loading_date_range_start() { return this.errldr_date_range_start },
            headers() {
                let headers = []
    
                headers[0] = { text: 'Full Name', value: 'employee.full_name', align: 'center', }
                if (this.department_data.show_column) headers[1] = { text: 'Department', value: 'department.name', align: 'center', }
                if (this.affiliation_data.show_column) headers[2] = { text: 'Affiliation', value: 'employee_info.affiliation', align: 'center', }
                if (this.area_data.show_column) headers[3] = { text: 'Area', value: 'area.name', align: 'center', }
                if (this.schedule_data.show_column) headers[4] = { text: 'Schedule', value: 'schedule.text', align: 'center', }
                headers[5] = { text: 'Date', value: 'date_created', align: 'center', }
    
                return headers
            },
            fileName() { return `hdec_${this.date_range_start}_to_${this.date_range_end}.xlsx`; },
            excel_table_master() {
                // let excel_table = this.health_declaration_list
                let excel_table = this.main_table       // allows for the filtered version of the table
                const positive_confirmation = "YES"
                const negative_confirmation = "NO"
                const none_confirmation = "NONE"
                const na_confirmation = "N/A"
    
                excel_table = excel_table.map(e => {
                    const travel_duration_start = ((e.travel_data || {}).begin_date || "")
                    const travel_duration_end = ((e.travel_data || {}).end_date || "")
                    const travel_duration = (travel_duration_start && travel_duration_end) ? travel_duration_start + " - " + travel_duration_end : na_confirmation
    
                    return {
                        "Date": e.date_created,
                        "Complete Name of employee (last name, first name middle name)": e.employee.full_name,
                        "Age": e.employee_info?.age,
                        "Sex": e.employee?.sex?.abbreviation,
                        "email": e.employee_info?.email,
                        "Contact Number": e.employee_info?.contact_number,
                        "Employee Status": e.employee_info?.status,
                        "Position": e.employee_info?.position,
                        "Department": e.employee_info?.department,
                        "Area": e.area?.name,
                        "Schedule": e.employee_info?.schedule,
    
                        "Temperature": (e.hdec_symptoms || {}).temperature,
                        "Fever (lagnat)": (e.hdec_symptoms || {}).fever == 1 ? positive_confirmation : negative_confirmation,
                        "Cough (ubo)": (e.hdec_symptoms || {}).cough == 1 ? positive_confirmation : negative_confirmation,
                        "Colds (sipon)": (e.hdec_symptoms || {}).colds == 1 ? positive_confirmation : negative_confirmation,
                        "Sore Throat (pananakit ng lalamunan)": (e.hdec_symptoms || {}).sore_throat == 1 ? positive_confirmation : negative_confirmation,
                        "Headache (pananakit ng ulo)": (e.hdec_symptoms || {}).headache == 1 ? positive_confirmation : negative_confirmation,
                        "Body Malaise (pananakit ng katawan at kasukasuhan)": (e.hdec_symptoms || {}).body_malaise == 1 ? positive_confirmation : negative_confirmation,
                        "Diarrhea (pagtatae)": (e.hdec_symptoms || {}).diarrhea == 1 ? positive_confirmation : negative_confirmation,
                        "Anosmia (pagkawala ng pang-amoy)": (e.hdec_symptoms || {}).anosmia == 1 ? positive_confirmation : negative_confirmation,
                        "Dysgeusia (naiba ang panlasa)": (e.hdec_symptoms || {}).dysgeusia == 1 ? positive_confirmation : negative_confirmation,
                        "Ageusia (kawalan ng panlasa)": (e.hdec_symptoms || {}).ageusia == 1 ? positive_confirmation : negative_confirmation,
                        "Hypogeusia (nabawasan ang panlasa)": (e.hdec_symptoms || {}).hypogeusia == 1 ? positive_confirmation : negative_confirmation,
    
                        "Others (please specify)": ((e.hdec_symptoms || {}).others || none_confirmation),
                        "With High Risk exposure to a confirmed case?": ((e.exposure_data || {}).date) ? positive_confirmation : negative_confirmation,
                        "Date of Last Exposure": ((e.exposure_data || {}).date || na_confirmation),
                        "Name of person exposed to": ((e.exposure_data || {}).exposed_to || na_confirmation),
                        "Relationship": ((e.exposure_data || {}).exposure_relationship || na_confirmation),
                        "Have you traveled outside BLISTT?": ((e.travel_data || {}).begin_date) ? positive_confirmation : negative_confirmation,
                        // travel_start: ((e.travel_data || {}).begin_date || ""),
                        // travel_end: ((e.travel_data || {}).end_date || ""),
                        "Duration of Travel (from-to)": travel_duration,
                        "Address/Location Traveled": ((e.travel_data || {}).location || na_confirmation),
                    }
                })
                return excel_table
            },
            excel_table_area() {
                // let excel_table = this.health_declaration_list
                let excel_table = this.main_table       // allows for the filtered version of the table
                const positive_confirmation = "YES"
                const negative_confirmation = "NO"
                const none_confirmation = "NONE"
                const na_confirmation = "N/A"
    
                const user = JSON.parse(localStorage.getItem("user"))
                const area = user.area
    
                excel_table = excel_table.reduce((r, e) => {
                    if (area === e.employee_info.area_id) {
                        const travel_duration_start = ((e.travel_data || {}).begin_date || "")
                        const travel_duration_end = ((e.travel_data || {}).end_date || "")
                        const travel_duration = (travel_duration_start && travel_duration_end) ? travel_duration_start + " - " + travel_duration_end : na_confirmation
    
                        return r.concat({
                            "Date": e.date_created,
                            "Complete Name of employee (last name, first name middle name)": e.employee?.full_name,
                            "Area": e.area?.name,
    
                            "Temperature": (e.hdec_symptoms || {}).temperature,
                            "Fever (lagnat)": (e.hdec_symptoms || {}).fever == 1 ? positive_confirmation : negative_confirmation,
                            "Cough (ubo)": (e.hdec_symptoms || {}).cough == 1 ? positive_confirmation : negative_confirmation,
                            "Colds (sipon)": (e.hdec_symptoms || {}).colds == 1 ? positive_confirmation : negative_confirmation,
                            "Sore Throat (pananakit ng lalamunan)": (e.hdec_symptoms || {}).sore_throat == 1 ? positive_confirmation : negative_confirmation,
                            "Headache (pananakit ng ulo)": (e.hdec_symptoms || {}).headache == 1 ? positive_confirmation : negative_confirmation,
                            "Body Malaise (pananakit ng katawan at kasukasuhan)": (e.hdec_symptoms || {}).body_malaise == 1 ? positive_confirmation : negative_confirmation,
                            "Diarrhea (pagtatae)": (e.hdec_symptoms || {}).diarrhea == 1 ? positive_confirmation : negative_confirmation,
                            "Anosmia (pagkawala ng pang-amoy)": (e.hdec_symptoms || {}).anosmia == 1 ? positive_confirmation : negative_confirmation,
                            "Dysgeusia (naiba ang panlasa)": (e.hdec_symptoms || {}).dysgeusia == 1 ? positive_confirmation : negative_confirmation,
                            "Ageusia (kawalan ng panlasa)": (e.hdec_symptoms || {}).ageusia == 1 ? positive_confirmation : negative_confirmation,
                            "Hypogeusia (nabawasan ang panlasa)": (e.hdec_symptoms || {}).hypogeusia == 1 ? positive_confirmation : negative_confirmation,
    
                            "Others (please specify)": ((e.hdec_info || {}).others || none_confirmation),
                            "With High Risk exposure to a confirmed case?": ((e.exposure_data || {}).date) ? positive_confirmation : negative_confirmation,
                            "Date of Last Exposure": ((e.exposure_data || {}).date || na_confirmation),
                            "Have you traveled outside BLISTT?": ((e.travel_data || {}).begin_date) ? positive_confirmation : negative_confirmation,
                            "Address/Location Traveled": ((e.travel_data || {}).location || na_confirmation),
    
                            // "Age": e.employee_info.age,
                            // "Sex": e.employee.sex.abbreviation,  // long - e.employee.sex
                            // "email": e.employee_info.email,
                            // "Contact Number": e.employee_info.contact_number,
                            // "Employee Status": e.employee_info.status,
                            // "Position": e.employee_info.position,
                            // "Department": e.employee_info.department,
                            // "Schedule": e.employee_info.schedule,
    
                            // "Name of person exposed to": ((e.exposure_data || {}).exposed_to || ""),
                            // "Relationship": ((e.exposure_data || {}).exposure_relationship || ""),
                            // travel_start: ((e.travel_data || {}).begin_date || ""),
                            // travel_end: ((e.travel_data || {}).end_date || ""),
                            // "Duration of Travel (from-to)": travel_duration,
                        })
                    }
                    return r
                }, [])
    
                return excel_table
            },
            excel_table_department() {
                // let excel_table = this.health_declaration_list
                let excel_table = this.main_table       // allows for the filtered version of the table
                const positive_confirmation = "YES"
                const negative_confirmation = "NO"
                const none_confirmation = "NONE"
                const na_confirmation = "N/A"
    
                const user = JSON.parse(localStorage.getItem("user"))
                const department = user.department
    
                excel_table = excel_table.reduce((r, e) => {
                    if (department === e.employee_info.department_id) {
                        const travel_duration_start = ((e.travel_data || {}).begin_date || "")
                        const travel_duration_end = ((e.travel_data || {}).end_date || "")
                        const travel_duration = (travel_duration_start && travel_duration_end) ? travel_duration_start + " - " + travel_duration_end : na_confirmation
    
                        return r.concat({
                            "Date": e.date_created,
                            "Complete Name of employee (last name, first name middle name)": e.employee?.full_name,
                            "Area": e.area?.name,
    
                            "Temperature": (e.hdec_symptoms || {}).temperature,
                            "Fever (lagnat)": (e.hdec_symptoms || {}).fever == 1 ? positive_confirmation : negative_confirmation,
                            "Cough (ubo)": (e.hdec_symptoms || {}).cough == 1 ? positive_confirmation : negative_confirmation,
                            "Colds (sipon)": (e.hdec_symptoms || {}).colds == 1 ? positive_confirmation : negative_confirmation,
                            "Sore Throat (pananakit ng lalamunan)": (e.hdec_symptoms || {}).sore_throat == 1 ? positive_confirmation : negative_confirmation,
                            "Headache (pananakit ng ulo)": (e.hdec_symptoms || {}).headache == 1 ? positive_confirmation : negative_confirmation,
                            "Body Malaise (pananakit ng katawan at kasukasuhan)": (e.hdec_symptoms || {}).body_malaise == 1 ? positive_confirmation : negative_confirmation,
                            "Diarrhea (pagtatae)": (e.hdec_symptoms || {}).diarrhea == 1 ? positive_confirmation : negative_confirmation,
                            "Anosmia (pagkawala ng pang-amoy)": (e.hdec_symptoms || {}).anosmia == 1 ? positive_confirmation : negative_confirmation,
                            "Dysgeusia (naiba ang panlasa)": (e.hdec_symptoms || {}).dysgeusia == 1 ? positive_confirmation : negative_confirmation,
                            "Ageusia (kawalan ng panlasa)": (e.hdec_symptoms || {}).ageusia == 1 ? positive_confirmation : negative_confirmation,
                            "Hypogeusia (nabawasan ang panlasa)": (e.hdec_symptoms || {}).hypogeusia == 1 ? positive_confirmation : negative_confirmation,
    
                            "Others (please specify)": ((e.hdec_info || {}).others || none_confirmation),
                            "With High Risk exposure to a confirmed case?": ((e.exposure_data || {}).date) ? positive_confirmation : negative_confirmation,
                            "Date of Last Exposure": ((e.exposure_data || {}).date || na_confirmation),
                            "Have you traveled outside BLISTT?": ((e.travel_data || {}).begin_date) ? positive_confirmation : negative_confirmation,
                            "Address/Location Traveled": ((e.travel_data || {}).location || na_confirmation),
    
                            // "Age": e.employee_info.age,
                            // "Sex": e.employee.sex.abbreviation,  // long - e.employee.sex
                            // "email": e.employee_info.email,
                            // "Contact Number": e.employee_info.contact_number,
                            // "Employee Status": e.employee_info.status,
                            // "Position": e.employee_info.position,
                            // "Department": e.employee_info.department,
                            // "Schedule": e.employee_info.schedule,
    
                            // "Name of person exposed to": ((e.exposure_data || {}).exposed_to || ""),
                            // "Relationship": ((e.exposure_data || {}).exposure_relationship || ""),
                            // travel_start: ((e.travel_data || {}).begin_date || ""),
                            // travel_end: ((e.travel_data || {}).end_date || ""),
                            // "Duration of Travel (from-to)": travel_duration,
                        })
                    }
                    return r
                }, [])
    
                return excel_table
            },
            excel_table_name() {
                // let excel_table = this.health_declaration_list
                let excel_table = this.main_table       // allows for the filtered version of the table
                const positive_confirmation = "YES"
                const negative_confirmation = "NO"
                const none_confirmation = "NONE"
                const na_confirmation = "N/A"
    
                excel_table = excel_table.reduce((r, e) => {
                    const matchFirstName = e.employee.first_name.toLowerCase().includes(this.search.toLowerCase())
                    const matchLastName = e.employee.last_name.toLowerCase().includes(this.search.toLowerCase())
                    const matchFullName = e.employee.full_name.toLowerCase().includes(this.search.toLowerCase())
    
                    if (matchFirstName || matchLastName || matchFullName) {
                        const travel_duration_start = ((e.travel_data || {}).begin_date || "")
                        const travel_duration_end = ((e.travel_data || {}).end_date || "")
                        const travel_duration = (travel_duration_start && travel_duration_end) ? travel_duration_start + " - " + travel_duration_end : na_confirmation
    
                        return r.concat({
                            "Date": e.date_created,
                            "Complete Name of employee (last name, first name middle name)": e.employee?.full_name,
                            "Age": e.employee_info?.age,
                            "Sex": e.employee?.sex?.abbreviation,  // long - e.employee.sex
                            "email": e.employee_info?.email,
                            "Contact Number": e.employee_info?.contact_number,
                            "Employee Status": e.employee_info?.status,
                            "Position": e.employee_info?.position,
                            "Department": e.employee_info?.department,
                            "Area": e.area?.name,
                            "Schedule": e.employee_info?.schedule,
    
                            "Temperature": (e.hdec_symptoms || {}).temperature,
                            "Fever (lagnat)": (e.hdec_symptoms || {}).fever == 1 ? positive_confirmation : negative_confirmation,
                            "Cough (ubo)": (e.hdec_symptoms || {}).cough == 1 ? positive_confirmation : negative_confirmation,
                            "Colds (sipon)": (e.hdec_symptoms || {}).colds == 1 ? positive_confirmation : negative_confirmation,
                            "Sore Throat (pananakit ng lalamunan)": (e.hdec_symptoms || {}).sore_throat == 1 ? positive_confirmation : negative_confirmation,
                            "Headache (pananakit ng ulo)": (e.hdec_symptoms || {}).headache == 1 ? positive_confirmation : negative_confirmation,
                            "Body Malaise (pananakit ng katawan at kasukasuhan)": (e.hdec_symptoms || {}).body_malaise == 1 ? positive_confirmation : negative_confirmation,
                            "Diarrhea (pagtatae)": (e.hdec_symptoms || {}).diarrhea == 1 ? positive_confirmation : negative_confirmation,
                            "Anosmia (pagkawala ng pang-amoy)": (e.hdec_symptoms || {}).anosmia == 1 ? positive_confirmation : negative_confirmation,
                            "Dysgeusia (naiba ang panlasa)": (e.hdec_symptoms || {}).dysgeusia == 1 ? positive_confirmation : negative_confirmation,
                            "Ageusia (kawalan ng panlasa)": (e.hdec_symptoms || {}).ageusia == 1 ? positive_confirmation : negative_confirmation,
                            "Hypogeusia (nabawasan ang panlasa)": (e.hdec_symptoms || {}).hypogeusia == 1 ? positive_confirmation : negative_confirmation,
    
                            "Others (please specify)": ((e.hdec_info || {}).others || none_confirmation),
                            "With High Risk exposure to a confirmed case?": ((e.exposure_data || {}).date) ? positive_confirmation : negative_confirmation,
                            "Date of Last Exposure": ((e.exposure_data || {}).date || na_confirmation),
                            "Name of person exposed to": ((e.exposure_data || {}).exposed_to || na_confirmation),
                            "Relationship": ((e.exposure_data || {}).exposure_relationship || na_confirmation),
                            "Have you traveled outside BLISTT?": ((e.travel_data || {}).begin_date) ? positive_confirmation : negative_confirmation,
                            // travel_start: ((e.travel_data || {}).begin_date || ""),
                            // travel_end: ((e.travel_data || {}).end_date || ""),
                            "Duration of Travel (from-to)": travel_duration,
                            "Address/Location Traveled": ((e.travel_data || {}).location || na_confirmation),
                        })
                    }
                    return r
                }, [])
    
                return excel_table
            },
            excel_table_suspects() {
                // let excel_table = this.health_declaration_list
                let excel_table = this.main_table       // allows for the filtered version of the table
                const positive_confirmation = "YES";
                const negative_confirmation = "NO";
                const none_confirmation = "NONE";
                const na_confirmation = "N/A";
    
                excel_table = excel_table.reduce((r, e) => {
                    if ((Number(e.temperature) >= 37.8) ||
                        Boolean(Number(e.fever)) ||
                        Boolean(Number(e.cough)) ||
                        Boolean(Number(e.colds)) ||
                        Boolean(Number(e.sore_throat)) ||
                        Boolean(Number(e.headache)) ||
                        Boolean(Number(e.body_malaise)) ||
                        Boolean(Number(e.diarrhea)) ||
                        Boolean(Number(e.anosmia)) ||
                        Boolean(Number(e.dysgeusia)) ||
                        Boolean(Number(e.ageusia)) ||
                        Boolean(Number(e.hypogeusia)) ||
                        Boolean(e.hdec_info) ||
                        Boolean(e.exposure_data) ||
                        Boolean(e.travel_data)
                    ) {
                        const travel_duration_start = ((e.travel_data || {}).begin_date || "")
                        const travel_duration_end = ((e.travel_data || {}).end_date || "")
                        const travel_duration = (travel_duration_start && travel_duration_end) ? travel_duration_start + " - " + travel_duration_end : na_confirmation
    
                        return r.concat({
                            "Date": e.date_created,
                            "Complete Name of employee (last name, first name middle name)": e.employee.full_name,
                            "Age": e.employee_info?.age,
                            "Sex": e.employee?.sex?.abbreviation,  // long - e.employee.sex
                            "email": e.employee_info?.email,
                            "Contact Number": e.employee_info?.contact_number,
                            "Employee Status": e.employee_info?.status,
                            "Position": e.employee_info?.position,
                            "Department": e.employee_info?.department,
                            "Area": e.area?.name,
                            "Schedule": e.employee_info?.schedule,
    
                            "Temperature": (e.hdec_symptoms || {}).temperature,
                            "Fever (lagnat)": (e.hdec_symptoms || {}).fever == 1 ? positive_confirmation : negative_confirmation,
                            "Cough (ubo)": (e.hdec_symptoms || {}).cough == 1 ? positive_confirmation : negative_confirmation,
                            "Colds (sipon)": (e.hdec_symptoms || {}).colds == 1 ? positive_confirmation : negative_confirmation,
                            "Sore Throat (pananakit ng lalamunan)": (e.hdec_symptoms || {}).sore_throat == 1 ? positive_confirmation : negative_confirmation,
                            "Headache (pananakit ng ulo)": (e.hdec_symptoms || {}).headache == 1 ? positive_confirmation : negative_confirmation,
                            "Body Malaise (pananakit ng katawan at kasukasuhan)": (e.hdec_symptoms || {}).body_malaise == 1 ? positive_confirmation : negative_confirmation,
                            "Diarrhea (pagtatae)": (e.hdec_symptoms || {}).diarrhea == 1 ? positive_confirmation : negative_confirmation,
                            "Anosmia (pagkawala ng pang-amoy)": (e.hdec_symptoms || {}).anosmia == 1 ? positive_confirmation : negative_confirmation,
                            "Dysgeusia (naiba ang panlasa)": (e.hdec_symptoms || {}).dysgeusia == 1 ? positive_confirmation : negative_confirmation,
                            "Ageusia (kawalan ng panlasa)": (e.hdec_symptoms || {}).ageusia == 1 ? positive_confirmation : negative_confirmation,
                            "Hypogeusia (nabawasan ang panlasa)": (e.hdec_symptoms || {}).hypogeusia == 1 ? positive_confirmation : negative_confirmation,
    
                            "Others (please specify)": ((e.hdec_info || {}).others || none_confirmation),
                            "With High Risk exposure to a confirmed case?": ((e.exposure_data || {}).date) ? positive_confirmation : negative_confirmation,
                            "Date of Last Exposure": ((e.exposure_data || {}).date || na_confirmation),
                            "Name of person exposed to": ((e.exposure_data || {}).exposed_to || na_confirmation),
                            "Relationship": ((e.exposure_data || {}).exposure_relationship || na_confirmation),
                            "Have you traveled outside BLISTT?": ((e.travel_data || {}).begin_date) ? positive_confirmation : negative_confirmation,
                            "Duration of Travel (from-to)": travel_duration,
                            // travel_start: ((e.travel_data || {}).begin_date || ""),
                            // travel_end: ((e.travel_data || {}).end_date || ""),
                            "Address/Location Traveled": ((e.travel_data || {}).location || na_confirmation),
                        });
                    }
    
                    return r;
                }, []);
    
                // if (typeof excel_table === 'undefined')
                //     excel_table = [];
    
                return excel_table;
            },
            main_table() {
                let main_table = this.health_declaration_list
    
                if (this.affiliation_data.value > 0) {
                    main_table = main_table.filter(e => {
                        return e.employee_info.affiliate_id == this.affiliation_data.value
                    })
                }
    
                if (this.area_data.value > 0) {
                    main_table = main_table.filter(e => {
                        return e.area_id == this.area_data.value
                    })
                }
    
                if (this.department_data.value > 0) {
                    main_table = main_table.filter(e => {
                        return e.department.id == this.department_data.value
                    })
                }
    
                if (this.schedule_data.value > 0) {
                    main_table = main_table.filter(e => {
                        return e.schedule.id == this.schedule_data.value
                    })
                }
    
                if (this.status_data.value.id > 0) {
                    main_table = main_table.filter(e => {
                        return e.employee_info.emp_status_id == this.status_data.value.id
                    })
                }
    
                if (this.is_red_flagged) {
                    main_table = main_table.filter(e => {
                        return e.red_flag
                    })
                }
    
                if (this.is_affiliate) {
                    if (this.position_data.value > 0) {
                        main_table = main_table.filter(e => {
                            const will_include = (e.employee_info?.emp_status_id == 9) &&  // 9 - Affiliate
                                (e.employee_info?.position_id == this.position_data.value)
                            return will_include
                        })
                    } else {
                        main_table = main_table.filter(e => {
                            return e.employee_info?.emp_status_id == 9  // 9 - Affiliate
                        })
                    }
                }
                // do mapping here... the results of the map should also be reflected/updated in headers()
    
                return main_table;
            },
        },
    
        methods: {
            ...mapActions('appManager', {
                setSnackbar: 'setSnackbar',
            }),
            ...mapActions('employee', {
                setEmployeeSubject: 'setSubject',
            }),
            ...mapActions('healthDeclaration', {
                populateHealthDeclaration_OnDataRange: 'populateItemsOnDateRange',
                setActiveTab: 'setActiveTab',
                setConfirmedUpdatableTarget: 'setConfirmedUpdatableTarget',
                setDisplayDialog: 'setDisplayDialog',
                setHoveredUpdatableTarget: 'setHoveredUpdatableTarget',
                setTabStatus: 'setTabStatus',
    
                setHealthDeclarationConcept: 'setConcept',
                setHealthDeclarationExhibit: 'setExhibit',
                setHealthDeclarationSubject: 'setSubject',
            }),
            ...mapActions('appManager', {
                setTitle: 'setTitle',
            }),
    
            ButtonDebug_Click() {
                this.initializeToExcel();
            },
            ButtonByArea_Click() {
                this.initializeToExcelByArea();
            },
            ButtonByDepartment_Click() {
                this.initializeToExcelByDepartment();
            },
            ButtonByName_Click() {
                this.initializeToExcelByName();
            },
            ButtonBySuspects_Click() {
                this.initializeToExcelBySuspects();
            },
            ButtonToExcel_Click() {
                this.initializeToExcel();
            },
            ButtonSearch_Click() {
                this.initializeSearchTable();
            },
            DataTable_ClickRow(value) {
                this.initializeShowItem(value);
            },
            DatePickerDateRangeEnd_Change(value) {
                const payload = {
                    date_range_start: this.date_range_start,
                    date_range_end: value,
                };
    
                this.validateDateRangeEnd(payload);
                this.validateDateRangeStart(payload);
            },
            DatePickerDateRangeStart_Change(value) {
                const payload = {
                    date_range_start: value,
                    date_range_end: this.date_range_end,
                };
    
                this.validateDateRangeEnd(payload);
                this.validateDateRangeStart(payload);
            },
            SwitchRedFlag_Toggle(value) {},
            SwitchAffiliate_Toggle(value) {},
    
            filterTable(value, search, item) {
                let inFullName = RegExp(search, 'i').test(item?.employee?.full_name)
                let inFirstName = RegExp(search, 'i').test(item?.employee?.first_name)
                let inLastName = RegExp(search, 'i').test(item?.employee?.last_name)
                let inArea = RegExp(search, 'i').test(item?.area?.name)
                let inSchedule = RegExp(search, 'i').test(item?.schedule?.text)
                let inDepartment = RegExp(search, 'i').test(item?.employee_info?.department)
                let inDateCreated = RegExp(search, 'i').test(item?.date_created)
                // let x = value != null &&
                //     search != null &&
                //     typeof value !== 'boolean' &&
                //     value.toString().toLocaleLowerCase().indexOf(search.toLocaleLowerCase()) !== -1;
                return inFullName || inFirstName || inLastName || inArea || inSchedule || inDepartment || inDateCreated;
            },
            filterToArea(table) {
    
    
                const result = table.filter(e => {
    
                });
            },
            async initializeSearchTable() {
                // promise validation
                this.loading_search = true;
                this.valid = true;
                const payload = {
                    date_range_start: this.date_range_start,
                    date_range_end: this.date_range_end,
                };
    
                if (!payload.date_range_start && !payload.date_range_end) {
                    const currentDate = new Date().toJSON().slice(0,10);                    // .replace(/-/g, '/');
                    this.date_range_start = this.date_range_end = currentDate;
                    setTimeout(() => { this.initiateSearchTable(); }, 500);
    
                } else {
                    const pvDateRangeStart = this.validateDateRangeStart(payload);
                    const pvDateRangeEnd = this.validateDateRangeEnd(payload);
                    const pvAll = [pvDateRangeStart, pvDateRangeEnd];
    
                    await Promise.all(pvAll).then(() => {
                        if (this.valid) {
                            this.initiateSearchTable();
                        } else {
                            const text = "Please fill up the dates accordingly"
                            this.setSnackbar({ show: true, color: 'error', text: text })
                            this.loading_search = false;
                        }
                    }).catch(e => {
                        console.log("application/dashboard/TheDashboard.vue - methods.initializeSearchTable()", e);
                        this.loading_search = false;
                    });
                }
            },
            async initializeTargetItem(value, tab_index, command) {
                const value_id = value.id;
                this.setActiveTab(tab_index);
    
                let options = {
                    show: true,
                };
                this.setTabStatus(options);
    
                this.confirmed_target = value_id;
                await this.setHealthDeclarationConcept(null);
                await this.setHealthDeclarationExhibit(value_id);
                await this.setHealthDeclarationSubject(value_id);
    
                await this.setEmployeeSubject(this.health_declaration_exhibit.user_id)
    
                // display the dialog/modal
                options = {
                    show: true,
                    command,
                };
                this.setDisplayDialog(options);
            },
            initializeToExcel() {
                let wb = XLSX.utils.book_new();
    
                let table = this.excel_table_master;
                table = this.sortByProperty(table, "Date");
                table = this.sortByProperty(table, "Area");
                table = this.sortByProperty(table, "Complete Name of employee (last name, first name middle name)");
                let ws = XLSX.utils.json_to_sheet(table);
                XLSX.utils.book_append_sheet(wb, ws, "Masterlist");
    
                // table = this.excel_table_area;
                // table = this.sortByProperty(table, "Date");
                // table = this.sortByProperty(table, "Complete Name of employee (last name, first name middle name)");
                // ws = XLSX.utils.json_to_sheet(table);
                // XLSX.utils.book_append_sheet(wb, ws, "For Area Supervisor");
    
                // table = this.excel_table_suspects;
                // table = this.sortByProperty(table, "Date");
                // table = this.sortByProperty(table, "Area");
                // table = this.sortByProperty(table, "Complete Name of employee (last name, first name middle name)");
                // ws = XLSX.utils.json_to_sheet(table);
                // XLSX.utils.book_append_sheet(wb, ws, "Summary of all Red Mark");
    
                // merging
                // const merge = [
                //     { s: { r:0, c:0, }, e: { r:1, c:0, }, },        // Date
                //     { s: { r:0, c:1, }, e: { r:1, c:1, }, },        // Name
                //     { s: { r:0, c:9, }, e: { r:1, c:9, }, },        // Area
                //     { s: { r:0, c:10, }, e: { r:1, c:10, }, },      // Schedule
                //     { s: { r:0, c:11, }, e: { r:0, c:23, }, },      // Schedule
                // ];
                // ws["!merges"] = merge;
                // end merging
    
                XLSX.writeFile(wb, this.fileName);
            },
            initializeToExcelByArea() {
                let wb = XLSX.utils.book_new();
    
                let table = this.excel_table_area;
                table = this.sortByProperty(table, "Date");
                table = this.sortByProperty(table, "Complete Name of employee (last name, first name middle name)");
                let ws = XLSX.utils.json_to_sheet(table);
                XLSX.utils.book_append_sheet(wb, ws, "By Area");
    
                XLSX.writeFile(wb, this.fileName);
            },
            initializeToExcelByDepartment() {
                let wb = XLSX.utils.book_new();
    
                let table = this.excel_table_department;
                table = this.sortByProperty(table, "Date");
                table = this.sortByProperty(table, "Complete Name of employee (last name, first name middle name)");
                let ws = XLSX.utils.json_to_sheet(table);
                XLSX.utils.book_append_sheet(wb, ws, "By Area");
    
                XLSX.writeFile(wb, this.fileName);
            }
            ,initializeToExcelByName() {
                let wb = XLSX.utils.book_new();
    
                let table = this.excel_table_name;
                table = this.sortByProperty(table, "Date");
                table = this.sortByProperty(table, "Complete Name of employee (last name, first name middle name)");
                let ws = XLSX.utils.json_to_sheet(table);
                XLSX.utils.book_append_sheet(wb, ws, "By Name");
    
                XLSX.writeFile(wb, this.fileName);
            },
            initializeToExcelBySuspects() {
                let wb = XLSX.utils.book_new();
    
                let table = this.excel_table_suspects;
                table = this.sortByProperty(table, "Date");
                table = this.sortByProperty(table, "Area");
                table = this.sortByProperty(table, "Complete Name of employee (last name, first name middle name)");
                let ws = XLSX.utils.json_to_sheet(table);
                XLSX.utils.book_append_sheet(wb, ws, "Suspects");
    
                XLSX.writeFile(wb, this.fileName);
            },
    
            initializeShowItem(value) {
                this.initializeTargetItem(value, 0, 'show');            // 0 - show
            },
            async initiateSearchTable() {
                const payload = {
                    date_range_start: this.date_range_start,
                    date_range_end: this.date_range_end,
                }
    
                await this.populateHealthDeclaration_OnDataRange(payload)
                this.loading_search = false
            },
            selectItem(value_id) {
                this.hovered_target = value_id;
            },
            unselectItem(value_id) {
                this.hovered_target = false;
            },
    
            sortByProperty(objArray, prop, direction) {
                if (arguments.length < 2) throw new Error("ARRAY, AND OBJECT PROPERTY MINIMUM ARGUMENTS, OPTIONAL DIRECTION");
    
                if (!Array.isArray(objArray)) throw new Error("FIRST ARGUMENT NOT AN ARRAY");
    
                const clone = objArray.slice(0);
                const direct = arguments.length > 2 ? arguments[2] : 1; // Default to ascending
                const propPath = (prop.constructor === Array) ? prop : prop.split(".");
                clone.sort((a, b) => {
                    for (let p in propPath) {
                        if (a[propPath[p]] && b[propPath[p]]) {
                            a = a[propPath[p]];
                            b = b[propPath[p]];
                        }
                    }
    
                    // convert numeric strings to integers
                    // a = a.match(/^\d+$/) ? +a : a;
                    // b = b.match(/^\d+$/) ? +b : b;
                    a = String(a).match(/^\d+$/) ? +a : a;
                    b = String(b).match(/^\d+$/) ? +b : b;
                    return ((a < b) ? -1 * direct : ((a > b) ? 1 * direct : 0));
                });
                return clone;
            },
            willShow(role_level) {
                let hasRoleMatch = false;
                let isSuperAdmin = false;
                let allow = false;
    
                if (Array.isArray(role_level)) {
                    let matchInArray = role_level.some(f => {
                        if (Array.isArray(this.user_role_list) && (this.user_role_list.length)) {
                            role_level = f.split("-");
                            const role = Number(role_level[0]);
                            const level = Number(role_level[1]);
    
                            hasRoleMatch = this.user_role_list.some(e => {
                                const x = Number(e.role) === role;
                                const y = Number(e.level) >= level;
                                return x && y;
                            });
    
                            // Super Admin override
                            isSuperAdmin = this.user_role_list.some(e => {
                                const x = Number(e.role) === 1;
                                const y = Number(e.level) >= 1;
                                return x && y;
                            });
    
                            return hasRoleMatch || isSuperAdmin;
                        }
                    });
    
                    allow = matchInArray;
                } else {
                    if (Array.isArray(this.user_role_list) && (this.user_role_list.length)) {
                        role_level = role_level.split("-");
                        const role = Number(role_level[0]);
                        const level = Number(role_level[1]);
    
                        hasRoleMatch = this.user_role_list.some(e => {
                            const x = Number(e.role) === role;
                            const y = Number(e.level) >= level;
                            return x && y;
                        });
    
                        // Super Admin override
                        isSuperAdmin = this.user_role_list.some(e => {
                            const x = Number(e.role) === 1;
                            const y = Number(e.level) >= 1;
                            return x && y;
                        });
    
                        allow = hasRoleMatch || isSuperAdmin;
                    }
                }
    
                return allow;
            },
    
            // DATA VALIDATION/ERROR CHECKING
            async validateDateRangeEnd(payload) {
                const src = "application/dashboard/TheDashboard.vue - actions.validateDateRangeEnd(value)";
                this.errldr_date_range_end = true;
                let error_messages = "";
    
                const date_range_end = payload.date_range_end;
                const date_range_start = payload.date_range_start;
    
                if (!date_range_end) {
                    error_messages += "Value must not be blank. ";
                }
    
                if (date_range_start && date_range_end) {
                    if (date_range_start > date_range_end)
                        error_messages += "End date must come later than the starting date";
                }
    
                if (error_messages) {
                    this.errmsg_date_range_end = error_messages;
                    this.valid = false;
                    this.errldr_date_range_end = false;
                } else {
                    this.errmsg_date_range_end = "";
                    this.errldr_date_range_end = false;
                }
            },
            async validateDateRangeStart(payload) {
                const src = "application/dashboard/TheDashboard.vue - actions.validateDateRangeStart(value)";
                this.errldr_date_range_start = true;
                let error_messages = "";
    
                const date_range_end = payload.date_range_end;
                const date_range_start = payload.date_range_start;
    
                if (!date_range_start) {
                    error_messages += "Value must not be blank. ";
                }
    
                if (date_range_start && date_range_end) {
                    if (date_range_start > date_range_end)
                        error_messages += "Start date must come earlier than the starting date";
                }
    
                if (error_messages) {
                    this.errmsg_date_range_start = error_messages;
                    this.valid = false;
                    this.errldr_date_range_start = false;
                } else {
                    this.errmsg_date_range_start = "";
                    this.errldr_date_range_start = false;
                }
            },
    
            // UTILITY FUNCTIONS
            formatDate(date) {
                if (!date) return null;
                const [year, month, day] = date.split('-');
                return `${month}/${day}/${year}`;
            }
        },
    
        created() {
            this.setTitle(this.title);
        },
    }
    </script>
    
    <style scoped>
    .red_highlight {
        background-color: #FF000033;
    }
    </style>
    