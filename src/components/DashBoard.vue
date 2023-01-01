<template>
  <div id="app">
    <div class="panel panel-default mt-5">
      <div class="sticky-top">
        <div class="bg-light p-3 border-start border-end border-4 border-success rounded mb-3">
          <div class="row ">
            <div class="col"><input class="form-control" type="text" v-model="searchInput"
                placeholder="Hospital No./Surname/Name" /></div>

            <!-- <div class="col"><input class="form-control" type="text" v-model="searchHpercode" placeholder="Hpercode" /></div>
                <div class="col"><input class="form-control" type="text" v-model="searchFamily" placeholder="Family Name" /></div>
                <div class="col"><input class="form-control" type="text" v-model="searchFirst" placeholder="First Name" /></div> -->
            <div class="col"><button class="btn btn-success" type="button" v-on:click="buttonSearch">Search</button>
            </div>
            <!-- <div class="col"><input type="date"></div> -->
            <div class="col">
              <div class="row">
                <div class="col-auto">Sort by:</div>
                <div class="col-auto">
                  <select class="form-select" id="" v-model="this.dashboardTask.statusSelect">
                    <option selected value="">All</option>
                    <option value="drafts">Drafts</option>
                    <option value="completeForm">Export</option>
                    <option value="archive">Archive</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-center">
        <Paginate :page-count="pagesCount" :click-handler="changePage" :container-class="'pagination'"
          :page-class="'page-item'" :prev-text="'Prev'" :next-text="'Next'" :page-range="3" :margin-pages="1">
        </Paginate>
      </div>
      <div class="row">
        <div style="width:1000px; margin:auto">
          <table id="table">
            <thead>
              <tr class="bg-dark text-white text-center">
                <th>Hospital #</th>
                <th>Last name</th>
                <th>First name</th>
                <th>Admission Date</th>
                <th>Admission Time</th>
                <th>action</th>
                <th @click="refresh">
                  <div class="refreshicon"><i class="bi bi-arrow-clockwise"></i></div>
                </th>
                <transition name="bounce">
                  <div class="info" id="a1" v-if="showInfo['1a']">
                    <p>Open Form</p>
                  </div>
                </transition>
                <transition name="bounce">
                  <div class="info" id="b1" v-if="showInfo['1b']">
                    <p>Edit</p>
                  </div>
                </transition>
                <transition name="bounce">
                  <div class="info" id="c1" v-if="showInfo['1c']">
                    <p>Export</p>
                  </div>
                </transition>
                <transition name="bounce">
                  <div class="info" id="d1" v-if="showInfo['1d']">
                    <p>Archive</p>
                  </div>
                </transition>
              </tr>
            </thead>
            <tbody>

              <tr v-for="td in showTable" :key="td" @click="$emit('patientHpercode',td.hpercode)" class="text-center">
                <!-- <template v-if="td.tsdesc == 'Radiotherapy'">
                        <td>{{td.hpercode}}</td>
                        <td>{{td.patlast}}</td>
                        <td>{{td.patfirst}}</td>
                        <td>{{td.tsdesc}}</td>
                        
                        </template>
                        <template v-else>

                        </template> -->

                <template v-if="td.eStatus == null">
                  <td>{{td.hpercode}}</td>
                  <td>{{td.patlast}}</td>
                  <td>{{td.patfirst}}</td>
                  <td>{{convertDate(td.admdate)}}</td>
                  <td>{{convertTime(td.admdate)}}</td>
                  
                  <td colspan="2">
                    <div class="d-flex justify-content-center" id="pointers">
                      <div class="bd-highlight">
                        <router-link :to="`/TraumaInjuryForm/${td.enccode1}`"><button
                            class="bi bi-file-text btn btn-sm btn-outline-primary border-0 "
                            @mouseover="showInfo['1a'] = true" @mouseleave="showInfo['1a'] = false"></button>
                        </router-link>
                      </div>
                      <div class="bd-highlight"><button :disabled="'isDisabled'"
                          class="bi bi-pencil btn btn-sm btn-outline-secondary border-0"
                          @mouseover="showInfo['1b'] = true" @mouseleave="showInfo['1b'] = false"></button></div>
                      <div class="bd-highlight"><button :disabled="'isDisabled'"
                          class="bi bi-filetype-csv btn btn-sm btn-outline-secondary border-0"
                          @mouseover="showInfo['1c'] = true" @mouseleave="showInfo['1c'] = false"></button></div>
                      <div class="bd-highlight"><button :disabled="'isDisabled'"
                          class="bi bi-archive btn btn-sm btn-outline-secondary border-0"
                          @mouseover="showInfo['1d'] = true" @mouseleave="showInfo['1d'] = false"></button></div>
                    </div>
                  </td>

                </template>
                <template v-else-if="td.eStatus=='drafts'">
                  <td>{{td.hpercode}}</td>
                  <td>{{td.patlast}}</td>
                  <td>{{td.patfirst}}</td>
                  <td>{{convertDate(td.admdate)}}</td>
                  <td>{{convertTime(td.admdate)}}</td>

                  <td colspan="2">
                    <div class="d-flex justify-content-center" id="pointers">
                      <div class="bd-highlight"><button :disabled="'isDisabled'"
                          class="bi bi-file-text btn btn-sm btn-outline-secondary border-0 "
                          @mouseover="showInfo['1a'] = true" @mouseleave="showInfo['1a'] = false"></button></div>
                      <div class="bd-highlight">
                        <router-link :to="`/TraumaInjuryForm/${td.enccode1}`"><button
                            class="bi bi-pencil btn btn-sm btn-outline-warning border-0"
                            @mouseover="showInfo['1b'] = true" @mouseleave="showInfo['1b'] = false"></button>
                        </router-link>
                      </div>
                      <div class="bd-highlight"><button :disabled="'isDisabled'"
                          class="bi bi-filetype-csv btn btn-sm btn-outline-secondary border-0"
                          @mouseover="showInfo['1c'] = true" @mouseleave="showInfo['1c'] = false"></button></div>
                      <div class="bd-highlight"><button :disabled="'isDisabled'"
                          class="bi bi-archive btn btn-sm btn-outline-secondary border-0"
                          @mouseover="showInfo['1d'] = true" @mouseleave="showInfo['1d'] = false"></button></div>
                    </div>
                  </td>

                </template>
                <template v-else-if="td.eStatus=='completeForm'">
                  <td>{{td.hpercode}}</td>
                  <td>{{td.patlast}}</td>
                  <td>{{td.patfirst}}</td>
                  <td>{{convertDate(td.admdate)}}</td>
                  <td>{{convertTime(td.admdate)}}</td>

                  <td colspan="2">
                    <div class="d-flex justify-content-center" id="pointers">
                      <div class="bd-highlight"><button :disabled="'isDisabled'"
                          class="bi bi-file-text btn btn-sm btn-outline-secondary border-0 "
                          @mouseover="showInfo['1a'] = true" @mouseleave="showInfo['1a'] = false"></button></div>
                      <div class="bd-highlight"><button :disabled="'isDisabled'"
                          class="bi bi-pencil btn btn-sm btn-outline-secondary border-0"
                          @mouseover="showInfo['1b'] = true" @mouseleave="showInfo['1b'] = false"></button></div>
                      <div class="bd-highlight"><button @click="exportData(td.enccode1)"
                          class="bi bi-filetype-csv btn btn-sm btn-outline-success border-0"
                          @mouseover="showInfo['1c'] = true" @mouseleave="showInfo['1c'] = false"></button></div>
                      <div class="bd-highlight"><button :disabled="'isDisabled'"
                          class="bi bi-archive btn btn-sm btn-outline-secondary border-0"
                          @mouseover="showInfo['1d'] = true" @mouseleave="showInfo['1d'] = false"></button></div>
                    </div>
                  </td>

                </template>
                <template v-else-if="td.eStatus=='archive'">
                  <td>{{td.hpercode}}</td>
                  <td>{{td.patlast}}</td>
                  <td>{{td.patfirst}}</td>
                  <td>{{convertDate(td.admdate)}}</td>
                  <td>{{convertTime(td.admdate)}}</td>

                  <td colspan="2">
                    <div class="d-flex justify-content-center" id="pointers">
                      <div class="bd-highlight"><button :disabled="'isDisabled'"
                          class="bi bi-file-text btn btn-sm btn-outline-secondary border-0 "
                          @mouseover="showInfo['1a'] = true" @mouseleave="showInfo['1a'] = false"></button></div>
                      <div class="bd-highlight"><button :disabled="'isDisabled'"
                          class="bi bi-pencil btn btn-sm btn-outline-secondary  border-0"
                          @mouseover="showInfo['1b'] = true" @mouseleave="showInfo['1b'] = false"></button></div>
                      <div class="bd-highlight"><button :disabled="'isDisabled'"
                          class="bi bi-filetype-csv btn btn-sm btn-outline-secondary border-0"
                          @mouseover="showInfo['1c'] = true" @mouseleave="showInfo['1c'] = false"></button></div>
                      <div class="bd-highlight">
                        <router-link :to="`/TraumaInjuryForm/${td.enccode1}`"><button
                            class="bi bi-archive btn btn-sm btn-outline-danger border-0"
                            @mouseover="showInfo['1d'] = true" @mouseleave="showInfo['1d'] = false"></button>
                        </router-link>
                      </div>
                    </div>
                  </td>

                </template>
                
              </tr>
            </tbody>
          </table>
          <template v-if="this.dashboardTask.statusSelect=='completeForm'">
            <div class="d-flex justify-content-end mt-2 me-5">
              <button class="btn btn-secondary" @click="exportAll">Export all</button>
            </div>
          </template>
        </div>
      </div>
      <!-- <table>
        <tr>
            <th><input type="checkbox" v-model="selectAll"></th>
            <th align="left">Name</th>
        </tr>
        <tr v-for="user in users" :key="user">
            <td>
                <input type="checkbox" v-model="selected" :value="user.id" number>
            </td>
            <td>{{ user.name }}</td>
        </tr>
    </table> -->



      <div>

      </div>
    </div>

  </div>


</template>
<script>
  import axios from 'axios'
  import moment from 'moment'
  import { useExportTask } from '../store/exportTask'
  // import Select2 from '../../node_modules/vue3-select2-component/src/Select2.vue'
  // import {useArraypagination} from "vue-composable"
  import { ExportToCsv } from 'export-to-csv'
  import { usedashboardTask } from '../store/dashBoardTask'
  // import exportFromJSON from "export-from-json";

  export default {
    setup(){
      const exportTask = useExportTask()
      const dashboardTask = usedashboardTask()
      return { exportTask, dashboardTask }
    },
    components: {},
    data() {
      return {
        users: [ 
            { "id": "1", "name": "Shad Jast", "email": "pfeffer.matt@yahoo.com" },
            { "id": "2", "name": "Duane Metz", "email": "mohammad.ferry@yahoo.com" }, 
            { "id": "3", "name": "Myah Kris", "email": "evolkman@hotmail.com" }, 
            { "id": "4", "name": "Dr. Kamron Wunsch", "email": "lenora95@leannon.com" }
        ],
        selected: [],

        form1:{
                    // enccode:this.$route.params.enccode,
                    enccode:'',
                    entryBy:null,
                    status:'',
                    generalData:{
                        hpercode:'',
                        reg_no:'',
                        pat_phil_health_no:'',
                        plc_regcode:'',
                        plc_provcode:'',
                        plc_ctycode:'',
                        date_of_birth:'',
                        inj_date:'',
                        encounter_date:'',
                        date_report:'',
                        inj_time:'',
                        encounter_time:'',
                        time_report:'',
                        status: ''
                    },
                    preAdmissionData:{
                        first_aid_code: '',
                        inj_intent_code: '',
                        firstaid_others: '',
                        firstaid_others2: '',
                    },
                    natureOfInjury:{
                        mult_inj:'',
                        noi_abrasion:'N',
                        noi_abradtl:'',
                        noi_avulsion:'N',
                        noi_avuldtl:'',
                        noi_burn_r:'N',
                        degree_burn1:'',
                        degree_burn2:'',
                        degree_burn3:'',
                        degree_burn4:'',
                        noi_burndtl:'',
                        noi_concussion:'N',
                        noi_concussiondtl:'',
                        noi_contusion:'N',
                        noi_contudtl:'',
                        fractureCh:'N',
                        noi_frac_ope:'N',
                        noi_fropdtl:'',
                        noi_frac_clo:'N',
                        noi_frcldtl:'',
                        noi_owound:'N',
                        noi_owoudtl:'',
                        noi_amp:'N',
                        noi_ampdtl:'',
                        noi_others:'N',
                        noi_otherinj:'',
                    },
                    ExternalCauseOfInjury:{
                        ext_bite:'N',
                        ext_bite_sp:'',
                        ext_burn_r:'N',
                        ref_burn_code:'',
                        ext_burn_sp:'',
                        ext_chem:'N',
                        ext_chem_sp:'',
                        ext_sharp:'N',
                        ext_sharp_sp:'',
                        ext_drown_r:'N',
                        ref_drowning_cope:'',
                        ext_drown_sp:'',
                        ext_expo_nature_r:'N',
                        ref_expnature_code:'',
                        ext_expo_nature_sp:'',
                        ext_gun:'N',
                        ext_gun_sp:'',
                        ext_hang:'N',
                        ext_maul:'N',
                        ext_transport:'N',
                        ext_fall:'N',
                        ext_falldtl:'',
                        ext_firecracker_r:'N',
                        firecracker_code:'',
                        ext_firecracker_sp:'',
                        ext_sexual:'N',
                        ext_other:'N',
                        ext_other_sp:'',
                    },
                    forTransportVehicularAccident:{
                        vehicle_type_id:'',
                        ref_veh_acctype_code:'',
                        ref_severity:'',
                        vehicle_code:'',
                        pat_veh_sp:'',
                        etc_veh:'',
                        etc_veh_sp:'',
                        position_code:'',
                        pos_pat_sp:'',
                        ref_victim:'',
                        ref_victom_withother:'',
                        place_occ_code:'',
                        poc_wp_spec:'',
                        poc_etc_spec:'',
                        activity_code:'',
                        act_etc_spec:'',
                        risk_alcliq:'',
                        risk_smoke:'',
                        risk_drugs:'',
                        risk_mobpho:'',
                        risk_sleep:'',
                        risk_other:'',
                        risk_etc_spec:'',
                        risk_none:'',
                        safe_none:'',
                        safe_airbag:'',
                        safe_helmet:'',
                        safe_cseat:'',
                        safe_sbelt:'',
                        safe_unkn:'',
                        safe_vest:'',
                        safe_other:'',
                        safe_other_sp:'',
                    },
                    hospitalFacilityData:{
                        ptype_code:'e',
                        trans_ref:'',
                        trans_ref2:'',
                        ref_hosp_code:'',
                        ref_hosp_code_sp:'',
                        ref_physician:'',
                        status_code:'',
                        mode_transport_code:'',
                        stat_reachdtl:'',
                        diagnosis:'',
                        icd_10_nature_er:'',
                        icd_10_external_er:'',
                        treatmentGiven:'',
                        disposition_code:'',
                        disp_er_sp:'',
                        disp_er_sp_oth:'',
                        outcome_code:'',
                    },
                    inPatient:{
                        complete_diagnosis:'',
                        disp_inpat:'',
                        disp_inpat_sp2:'',
                        disp_inpat_oth:'',
                        inPatTransfer:'',
                        outcome_inpat:'',
                        icd10_nature_inpatient:'',
                        icd_10_ext_inpatient:'',
                        comments:'',
                        consultant_name:'',
                        consultant_mobile:'',
                        consultant_address:'',
                    },
                },
        searchInput: null,
        statusSelect: null,
        searchFamily: null,
        searchFirst: null,
        status: null,
        searchHpercode: null,
        entries: [],
        filtered_entries: [],
        show: [],
        totalentry: null,
        patinfo: [],
        hpercode: "000000000434482",
        searchStatus: null,
        showInfo: {
          '1a': false,
          '1b': false,
          '1c': false,
          '1d': false
        },
        currentPage: 1,
        perPage: 15,
        page: 1,
        
        dataCSV: {
          data: [{
            reg_no: '',
            hosp_no: '',
            pat_last_name: '',
            pat_first_name: '',
            pat_middle_name: '',
            pat_current_address_region: '',
            pat_current_address_province: '',
            pat_current_address_city: '',
            pat_sex: '',
            pat_date_of_birth: '',
            age_years: '',
            age_months: '',
            age_days: '',
            plc_regcode: '',
            plc_provcode: '',
            plc_ctycode: '',
            inj_date: '',
            inj_time: '',
            encounter_date: '',
            encounter_time: '',
            inj_intent_code: '',
            mult_inj: '',
            noi_abrasion: '',
            noi_abradtl: '',
            noi_avulsion: '',
            noi_avuldtl: '',
            noi_burndtl: '',
            noi_concussion: '',
            noi_concussiondtl: '',
            noi_contusion: '',
            noi_contudtl: '',
            noi_frac_clo: '',
            noi_frcldtl: '',
            noi_frac_ope: '',
            noi_fropdtl: '',
            noi_owound: '',
            noi_owoudtl: '',
            noi_amp: '',
            noi_ampdtl: '',
            noi_others: '',
            noi_otherinj: '',
            ext_bite: '',
            ext_bite_sp: '',
            ref_burn_code: '',
            ext_burn_sp: '',
            ext_chem: '',
            ext_chem_sp: '',
            ext_sharp: '',
            ext_sharp_sp: '',
            ref_drowning_cope: '',
            ext_fall: '',
            ext_falldtl: '',
            ext_gun: '',
            ext_gun_sp: '',
            ext_hang: '',
            ext_maul: '',
            ext_transport: '',
            ext_other: '',
            ext_other_sp: '',
            ref_veh_acctype_code: '',
            vehicle_code: '',
            pat_veh_sp: '',
            etc_veh: '',
            etc_veh_sp: '',
            position_code: '',
            pos_pat_sp: '',
            safe_airbag: '',
            safe_cseat: '',
            safe_helmet: '',
            safe_sbelt: '',
            safe_none: '',
            safe_unkn: '',
            safe_other: '',
            safe_other_sp: '',
            place_occ_code: '',
            poc_wp_spec: '',
            poc_etc_spec: '',
            activity_code: '',
            risk_alcliq: '',
            risk_sleep: '',
            risk_smoke: '',
            risk_mobpho: '',
            risk_other: '',
            risk_etc_spec: '',
            trans_ref: '',
            ref_hosp_code: '',
            ref_physician: '',
            status_code: '',
            stat_reachdtl: '',
            diagnosis: '',
            icd_10_nature_er: '',
            disposition_code: '',
            outcome_code: '',
            disp_inpat: '',
            outcome_inpat: '',
            ext_drown_sp: '',
            first_aid_code: '',
            firstaid_others: '',
            firstaid_others2: '',
            ref_expnature_code: '',
            safe_drown: '',
            firecracker_code: '',
            mode_transport_code: '',
            disp_er_sp: '',
            disp_inpat_sp: '',
            comments: '',
            pno: '',
            pre_date: '',
            ptype_code: '',
            status: '',
            hosp_reg_no: '',
            hosp_cas_no: '',
            temp_regcode: '',
            temp_provcode: '',
            temp_citycode: '',
            act_etc_spec: '',
            ref_hosp_code_sp: '',
            disp_inpat_oth: '',
            disp_inpat_sp2: '',
            noi_burn_r: '',
            ext_burn_r: '',
            ext_drown_r: '',
            ext_firecracker_r: '',
            ext_firecracker_sp: '',
            ext_sexual: '',
            vehicle_type_id: '',
            ext_expo_nature_r: '',
            ext_expo_nature_sp: '',
            trans_ref2: '',
            icd_10_external_er: '',
            complete_diagnosis: '',
            icd10_nature_inpatient: '',
            icd_10_ext_inpatient: '',
            disp_er_sp_oth: '',
            time_report: '',
            date_report: '',
            risk_none: '',
            rstatuscode: '',
            tempreg_no: '',
            pat_phil_health_no: '',
            pat_facility_no: '',

          }]
        }
      };
    },
    computed: {
      selectAll: {
            get: function () {
                return this.users ? this.selected.length == this.users.length : false;
            },
            set: function (value) {
                var selected = [];

                if (value) {
                    this.users.forEach(function (user) {
                        selected.push(user.id);
                    });
                }

                this.selected = selected;
            }
        },
      getUsers(){
        return this.useExportTask.getUsers
      },

      user(){
        return this.useExportTask.entries
      },

      showTable() {
        if(this.dashboardTask.statusSelect){
          console.log(this.statusSelect)
          return this.dashboardTask.entries.filter((td) => {return  this.dashboardTask.statusSelect.toLowerCase().split(' ').every(v => td.eStatus && td.eStatus.toLowerCase().includes(v))})
        }
        if (this.searchInput) {
          console.log(this.dashboardTask.statusSelect)
          // console.log(this.statusSelect)

          return this.dashboardTask.entries
            .filter((td) => {return this.searchInput.toLowerCase().split(" ").every(v => td.patlast.toLowerCase().includes(v))
                || this.searchInput.toLowerCase().split(" ").every(v => td.patfirst.toLowerCase().includes(v))
                || this.searchInput.toLowerCase().split(" ").every(v => td.hpercode.toLowerCase().includes(v))})
            // .filter((td) => {return this.statusSelect.toLowerCase().split(" ").every(v => td.patlast.toLowerCase().includes(v))})
            // // || this.statusSelect.every(v => td.patlast.toLowerCase().includes(v)) 
            
          // .filter((td)=>{return this.statusSelect.toLowerCase().split(' ').every(v => td.eStatus.toLowerCase().includes(v))})
        }


        // else if(this.statusSelect){
        //     return this.entries.filter((td) => {return this.statusSelect.toLowerCase().split(" ").every(v => td.eStatus.toLowerCase().includes(v));});

        // }
        // else if (this.searchFirst) {
        //     return this.entries.filter((td) => {
        //         return this.searchFirst.toLowerCase().split(" ")
        //             .every(v => td.patfirst.toLowerCase().includes(v));
        //     });
        // }
        // else if (this.searchHpercode) {
        //     return this.entries.filter((td) => {
        //         return this.searchHpercode.toLowerCase().split(" ")
        //             .every(v => td.hpercode.toLowerCase().includes(v));
        //     });
        // }
        else {
          // console.log('status')
          return this.dashboardTask.show
          // let start = (this.currentPage - 1) * this.perPage;
          // let end = this.currentPage * this.perPage;

          //   return this.show.slice(start,end)
        }
      },
      // showTable(){
      //   let start = (this.currentPage - 1) * this.perPage;
      //       let end = this.currentPage * this.perPage;

      //         return this.show.slice(start,end)
      //     },
      pagesCount() {
        return Math.ceil(this.totalentry / this.perPage)
      },
    },
    async created() {
      this.dashboardTask.entries= await this.dashboardTask.getStoredList
      // console.log("created" , this.dashboardTask.entries)
      let start = (1 - 1) * this.perPage;
        let end = 1 * this.perPage;
        this.dashboardTask.show = this.dashboardTask.entries.slice(start, end)
        this.totalentry = this.dashboardTask.entries.length

        this.dashboardTask.getRetrieveInjuryDataJson
    },
    methods: {
      async getAllPatientList() {
        const response = await axios.get("http://192.168.7.66:8040/api/injuryList");
        return response;
      },
      async getRetrieveInjuryDataJson(enccodeID, sectionName) {
        const enccode = {
          enccode: enccodeID,
          section: sectionName
        }
        const response = await axios.post("http://192.168.7.66:8040/api/spInjuryGetDataPerTable", enccode)
        // console.log(response.data)
        return response
      },

      convertDate(value) {
                return moment(value).format('MM-DD-YYYY');
            },
      convertTime(value){
          return moment(value).format('HH:MM:SS')
      },
      
      search(nameKey, myArray) {
        for (var i = 0; i < myArray.length; i++) {
          if (myArray[i].exportColumn == nameKey) {
            return myArray[i].value;

          }
        }
      },

      async exportAll(){ // ~> to ../store/dashBoardTask.js 

        // console.log("getFilterPatEnccode",await this.dashboardTask.getFilterPatEnccode)
        // this.dashboardTask.retrieveData
        // this.dashboardTask.getRetrieveInjuryDataJson
        await this.dashboardTask.listInsertToDataCSV

        // console.log(this.dashboardTask.exportDataList)
        //  this.dashboardTask.getExportList
        // this.dashboardTask.getRetrieveInjuryDataJson
        // console.log(this.dashboardTask.getFilterPatEnccode)
        // this.dashboardTask.retrieveData
        // console.log("exporting ",this.dashboardTask.dataCSV.data)
        // csvExporter.generateCsv(this.dashboardTask.dataCSV.data);
      },
      async exportData(enccode) {
        // const patHeader = await this.getAllPatientList()
        const patHeader = this.dashboardTask.entries
        // console.log("patheader ", patHeader)
        // this.form1.enccode = enccode;
        // this.form1.generalData.status= 'archive'
        //  this.form1.status = 'archive'
        // console.log("status:", this.form1)
        // const json ={
        //   json: JSON.stringify(this.form1)
        // }
        // console.log(json)

        // const response = await axios.post("http://192.168.7.66:8040/api/saveInjuryDataJSON",json)
        // console.log(response)
        // const response = await axios.post("http://192.168.7.66:8040/api/saveInjuryDataJSON",json)

        // const headerData = patHeader
        // console.log("Header data ",headerData)
        const header = patHeader.filter((patInfo) => {return enccode.toLowerCase().split(" ").every(v => patInfo.enccode1.toLowerCase().includes(v))})
        console.log("header ",header[0])
        
        // this.dataCSV.data[0].reg_no = header[0].reg_no
        // this.dataCSV.data[0].hosp_no = header[0].hosp_no
        this.dataCSV.data[0].pat_first_name = header[0].patfirst
        this.dataCSV.data[0].pat_last_name = header[0].patlast
        this.dataCSV.data[0].pat_middle_name = header[0].patmiddle
        this.dataCSV.data[0].pat_current_address_region = header[0].pat_current_address_region
        this.dataCSV.data[0].pat_current_address_province = header[0].pat_current_address_province
        this.dataCSV.data[0].pat_current_address_city = header[0].pat_current_address_city
        this.dataCSV.data[0].pat_sex = header[0].pat_sex
        this.dataCSV.data[0].pat_date_of_birth = header[0].pat_date_of_birth
        this.dataCSV.data[0].age_years = header[0].age_years


        const res1 = await this.getRetrieveInjuryDataJson(enccode, 'generalData')
        this.dataCSV.data[0].plc_regcode = this.search('plc_regcode', res1.data);
        this.dataCSV.data[0].plc_provcode = this.search('plc_provcode', res1.data);
        this.dataCSV.data[0].plc_ctycode = this.search('plc_ctycode', res1.data);
        this.dataCSV.data[0].time_report = this.search('time_report', res1.data);
        this.dataCSV.data[0].date_report = this.search('date_report', res1.data);
        // this.search('status', res1.data) = 'archive'
        res1.data[13].value = 'archive'
        // console.log(res1.data[13].value)

        // this.dataCSV.data[0].status = this.search('status', res1.data);
        // console.log("res3.data. ",res3.data)
        
        // res3.data.forEach(r => {
        //   this.dataCSV.data.push({
        //     plc_regcode: r.plc_regcode,
        //     plc_provcode: r.plc_provcode
        //     // plc_regcode: r.this.search('plc_regcode', res3.data),
        
        const res2 = await this.getRetrieveInjuryDataJson(enccode, 'preAdmissionData')
        // console.log("res1, ",res1)
        // // console.log("res3 1 ", res1)
        this.dataCSV.data[0].first_aid_code = this.search('first_aid_code', res2.data);
        this.dataCSV.data[0].inj_intent_code = this.search('inj_intent_code', res2.data);
        this.dataCSV.data[0].firstaid_others= this.search('firstaid_others', res2.data);
        this.dataCSV.data[0].firstaid_others2 = this.search('firstaid_others2', res2.data);
        // // res1.data.forEach(r => {
        // //   this.dataCSV.push({
        // //     plc_regcode: r.plc_regcode,

        //   })
        // })

        const res3 = await this.getRetrieveInjuryDataJson(enccode, 'natureOfInjury')
        this.dataCSV.data[0].mult_inj = this.search('mult_inj', res3.data);      
        this.dataCSV.data[0].noi_abrasion = this.search('noi_abrasion', res3.data);
        this.dataCSV.data[0].noi_abradtl = this.search('noi_abradtl', res3.data);
        this.dataCSV.data[0].noi_avulsion = this.search('noi_avulsion', res3.data);
        this.dataCSV.data[0].noi_avuldtl = this.search('noi_avuldtl', res3.data);
        this.dataCSV.data[0].noi_burn_r = this.search('noi_burn_r', res3.data);
        // this.dataCSV.data[0].degree_burn1 = this.search('degree_burn1', res3.data);
        // this.dataCSV.data[0].degree_burn2 = this.search('degree_burn2', res3.data);
        // this.dataCSV.data[0].degree_burn3 = this.search('degree_burn3', res3.data);
        // this.dataCSV.data[0].degree_burn4 = this.search('degree_burn4', res3.data);
        this.dataCSV.data[0].noi_burndtl = this.search('noi_burndtl', res3.data);
        this.dataCSV.data[0].noi_concussion = this.search('noi_concussion', res3.data);
        this.dataCSV.data[0].noi_concussiondtl = this.search('noi_concussiondtl', res3.data);
        this.dataCSV.data[0].noi_contusion = this.search('noi_contusion', res3.data);
        this.dataCSV.data[0].noi_contudtl = this.search('noi_contudtl', res3.data);
        // this.dataCSV.data[0].fractureCh = this.search('fractureCh', res3.data);
        this.dataCSV.data[0].noi_fropdtl = this.search('noi_fropdtl', res3.data);
        this.dataCSV.data[0].noi_frcldtl = this.search('noi_frcldtl', res3.data);
        this.dataCSV.data[0].noi_owound = this.search('noi_owound', res3.data);
        this.dataCSV.data[0].noi_owoudtl = this.search('noi_owoudtl', res3.data);
        this.dataCSV.data[0].noi_amp = this.search('noi_amp', res3.data);
        this.dataCSV.data[0].noi_ampdtl = this.search('noi_ampdtl', res3.data);
        this.dataCSV.data[0].noi_others = this.search('noi_others', res3.data);
        this.dataCSV.data[0].noi_otherinj = this.search('noi_otherinj', res3.data);

        const res4 = await this.getRetrieveInjuryDataJson(enccode, 'ExternalCauseOfInjury')
        this.dataCSV.data[0].ext_bite = this.search('ext_bite', res4.data);
        this.dataCSV.data[0].ext_bite_sp = this.search('ext_bite_sp', res4.data);
        this.dataCSV.data[0].ext_burn_r = this.search('ext_burn_r', res4.data);
        this.dataCSV.data[0].ref_burn_code = this.search('ref_burn_code', res4.data);
        this.dataCSV.data[0].ext_burn_sp = this.search('ext_burn_sp', res4.data);
        this.dataCSV.data[0].ext_chem = this.search('ext_chem', res4.data);
        this.dataCSV.data[0].ext_chem_sp = this.search('ext_chem_sp', res4.data);
        this.dataCSV.data[0].ext_sharp = this.search('ext_sharp', res4.data);
        this.dataCSV.data[0].ext_sharp_sp = this.search('ext_sharp_sp', res4.data);
        this.dataCSV.data[0].ext_drown_r = this.search('ext_drown_r', res4.data);
        this.dataCSV.data[0].ref_drowning_cope = this.search('ref_drowning_cope', res4.data);
        this.dataCSV.data[0].ext_drown_sp = this.search('ext_drown_sp', res4.data);
        this.dataCSV.data[0].ext_expo_nature_r = this.search('ext_expo_nature_r', res4.data);
        this.dataCSV.data[0].ref_expnature_code = this.search('ref_expnature_code', res4.data);
        this.dataCSV.data[0].ext_expo_nature_sp = this.search('ext_expo_nature_sp', res4.data);
        this.dataCSV.data[0].ext_gun = this.search('ext_gun', res4.data);
        this.dataCSV.data[0].ext_gun_sp = this.search('ext_gun_sp', res4.data);
        this.dataCSV.data[0].ext_hang = this.search('ext_hang', res4.data);
        this.dataCSV.data[0].ext_maul = this.search('ext_maul', res4.data);
        this.dataCSV.data[0].ext_transport = this.search('ext_transport', res4.data);
        this.dataCSV.data[0].ext_fall = this.search('ext_fall', res4.data);
        this.dataCSV.data[0].ext_falldtl = this.search('ext_falldtl', res4.data);
        this.dataCSV.data[0].ext_firecracker_r = this.search('ext_firecracker_r', res4.data);
        this.dataCSV.data[0].firecracker_code = this.search('firecracker_code', res4.data);
        this.dataCSV.data[0].ext_firecracker_sp = this.search('ext_firecracker_sp', res4.data);
        this.dataCSV.data[0].ext_sexual = this.search('ext_sexual', res4.data);
        this.dataCSV.data[0].ext_other = this.search('ext_other', res4.data);
        this.dataCSV.data[0].ext_other_sp = this.search('ext_other_sp', res4.data);

        const res5 = await this.getRetrieveInjuryDataJson(enccode, 'hospitalFacilityData')
        this.dataCSV.data[0].ptype_code = this.search('ptype_code', res5.data);
        this.dataCSV.data[0].trans_ref = this.search('trans_ref', res5.data);
        this.dataCSV.data[0].trans_ref2 = this.search('trans_ref2', res5.data);
        this.dataCSV.data[0].ref_hosp_code = this.search('ref_hosp_code', res5.data);
        this.dataCSV.data[0].ref_hosp_code_sp = this.search('ref_hosp_code_sp', res5.data);
        this.dataCSV.data[0].ref_physician = this.search('ref_physician', res5.data);
        this.dataCSV.data[0].status = this.search('status_code', res5.data);
        // this.dataCSV.data[0].status_code = this.search('status_code', res5.data);
        this.dataCSV.data[0].mode_transport_code = this.search('mode_transport_code', res5.data);
        this.dataCSV.data[0].stat_reachdtl = this.search('stat_reachdtl', res5.data);
        this.dataCSV.data[0].diagnosis = this.search('diagnosis', res5.data);
        this.dataCSV.data[0].icd_10_nature_er = this.search('icd_10_nature_er', res5.data);
        this.dataCSV.data[0].icd_10_external_er = this.search('icd_10_external_er', res5.data);
        // this.dataCSV.data[0].treatmentGiven = this.search('treatmentGiven', res5.data);
        this.dataCSV.data[0].disposition_code = this.search('disposition_code', res5.data);
        this.dataCSV.data[0].disp_er_sp = this.search('disp_er_sp', res5.data);
        this.dataCSV.data[0].disp_er_sp_oth = this.search('disp_er_sp_oth', res5.data);
        this.dataCSV.data[0].outcome_code = this.search('outcome_code', res5.data);

        const res6 = await this.getRetrieveInjuryDataJson(enccode, 'inPatient')
        this.dataCSV.data[0].complete_diagnosis = this.search('complete_diagnosis', res6.data);
        this.dataCSV.data[0].disp_inpat = this.search('disp_inpat', res6.data);
        this.dataCSV.data[0].disp_inpat_sp2 = this.search('disp_inpat_sp2', res6.data);
        this.dataCSV.data[0].disp_inpat_oth = this.search('disp_inpat_oth', res6.data);
        // this.dataCSV.data[0].inPatTransfer = this.search('inPatTransfer', res6.data);
        this.dataCSV.data[0].outcome_inpat = this.search('outcome_inpat', res6.data);
        this.dataCSV.data[0].icd10_nature_inpatient = this.search('icd10_nature_inpatient', res6.data);
        this.dataCSV.data[0].icd_10_ext_inpatient = this.search('icd_10_ext_inpatient', res6.data);
        this.dataCSV.data[0].comments = this.search('comments', res6.data);
        // this.dataCSV.data[0].consultant_name = this.search('consultant_name', res6.data);
        // this.dataCSV.data[0].consultant_mobile = this.search('consultant_mobile', res6.data);
        // this.dataCSV.data[0].consultant_address = this.search('consultant_address', res6.data);

        const res7 = await this.getRetrieveInjuryDataJson(enccode,'forTransportVehicularAccident')
        this.dataCSV.data[0].vehicle_type_id=this.search('vehicle_type_id', res7.data)
        this.dataCSV.data[0].ref_veh_acctype_code=this.search('ref_veh_acctype_code', res7.data)
        // this.dataCSV.data[0].ref_severity=this.search('ref_severity', res7.data)
        this.dataCSV.data[0].vehicle_code=this.search('vehicle_code', res7.data)
        this.dataCSV.data[0].pat_veh_sp=this.search('pat_veh_sp', res7.data)
        this.dataCSV.data[0].etc_veh=this.search('etc_veh', res7.data)
        this.dataCSV.data[0].etc_veh_sp=this.search('etc_veh_sp', res7.data)
        this.dataCSV.data[0].position_code=this.search('position_code', res7.data)
        this.dataCSV.data[0].pos_pat_sp=this.search('pos_pat_sp', res7.data)
        // this.dataCSV.data[0].ref_victim=this.search('ref_victim', res7.data)
        // this.dataCSV.data[0].ref_victom_withother=this.search('ref_victom_withother', res7.data)
        this.dataCSV.data[0].place_occ_code=this.search('place_occ_code', res7.data)
        this.dataCSV.data[0].poc_wp_spec=this.search('poc_wp_spec', res7.data)
        this.dataCSV.data[0].poc_etc_spec=this.search('poc_etc_spec', res7.data)
        this.dataCSV.data[0].activity_code=this.search('activity_code', res7.data)
        this.dataCSV.data[0].act_etc_spec=this.search('act_etc_spec', res7.data)
        this.dataCSV.data[0].risk_alcliq=this.search('risk_alcliq', res7.data)
        this.dataCSV.data[0].risk_smoke=this.search('risk_smoke', res7.data)
        // this.dataCSV.data[0].risk_drugs=this.search('risk_drugs', res7.data)
        this.dataCSV.data[0].risk_mobpho=this.search('risk_mobpho', res7.data)
        this.dataCSV.data[0].risk_sleep=this.search('risk_sleep', res7.data)
        this.dataCSV.data[0].risk_other=this.search('risk_other', res7.data)
        this.dataCSV.data[0].risk_etc_spec=this.search('risk_etc_spec', res7.data)
        this.dataCSV.data[0].risk_none=this.search('risk_none', res7.data)
        this.dataCSV.data[0].safe_none=this.search('safe_none', res7.data)
        this.dataCSV.data[0].safe_airbag=this.search('safe_airbag', res7.data)
        this.dataCSV.data[0].safe_helmet=this.search('safe_helmet', res7.data)
        this.dataCSV.data[0].safe_cseat=this.search('safe_cseat', res7.data)
        this.dataCSV.data[0].safe_sbelt=this.search('safe_sbelt', res7.data)
        this.dataCSV.data[0].safe_unkn=this.search('safe_unkn', res7.data)
        // this.dataCSV.data[0].safe_vest=this.search('safe_vest', res7.data)
        this.dataCSV.data[0].safe_other=this.search('safe_other', res7.data)
        this.dataCSV.data[0].safe_other_sp=this.search('safe_other_sp', res7.data)
        // console.log(res7)
        
        console.log("datacsv ",this.dataCSV.data)

        csvExporter.generateCsv(this.dataCSV.data);
        // return response
      },
      changePage(pageOfItems) {
        let firstElem = Math.max((pageOfItems - 1) * this.perPage, 0)
        let lastElem = Math.max(pageOfItems * this.perPage, this.perPage)
        this.dashboardTask.show = this.dashboardTask.entries.slice(firstElem, lastElem)
      },


      refresh() {
        this.$router.go(0)
        // this.$forceUpdate()
      }
    },
  };



  const options = {
    fieldSeparator: ',',
    quoteStrings: '"',
    decimalSeparator: '.',
    showLabels: true,
    // showTitle: true,
    // title: 'InjuryExport',
    filename:'Injury_list',
    useTextFile: false,
    useBom: true,
    useKeysAsHeaders: true,
    // headers: ['Column 1', 'Column 2', etc...] <-- Won't work with useKeysAsHeaders present!
  };

  const csvExporter = new ExportToCsv(options);
</script>
<style>
  input {
    width: 40%;
  }

  tr,
  #pointers {
    cursor: pointer;
  }

  #table {
    width: 100%;
    max-width: 100%;
  }

  #table thead th:nth-child(odd) {
    color: #ffffff;
    background: #324960;
  }

  #table tr:nth-child(even) {
    background: #F8F8F8;
  }

  #a1 {
    background: #0275d8;
    color: white;

    border-radius: 5px;
    box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.55);
    padding: 3px;
    height: 30px;
    position: absolute;
    margin: -10px 0 0 -150px
      /* z-index: 500; */
  }

  #b1 {
    background: #f0ad4e;
    color: white;
    width: 70px;
    border-radius: 5px;
    box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.55);
    padding: 3px;
    height: 30px;
    position: absolute;
    margin: -10px 0 0 -143px
      /* z-index: 500; */
  }

  #c1 {
    background: #5cb85c;
    color: white;
    border-radius: 5px;
    box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.55);
    padding: 3px;
    height: 30px;
    position: absolute;
    margin: -10px 0 0 -133px
      /* z-index: 500; */
  }

  #d1 {
    background: #d9534f;
    color: white;
    border-radius: 5px;
    box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.55);
    padding: 3px;
    height: 30px;
    position: absolute;
    margin: -10px 0 0 -140px
      /* z-index: 500; */
  }

  .bounce-enter-active {
    animation: bounce-in .1s;
  }

  .bounce-leave-active {
    animation: bounce-in .1s reverse;
  }

  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }

    50% {
      transform: scale(1.1);
    }

    100% {
      transform: scale(1);
    }
  }

  .table,
  td {
    border-collapse: collapse;
    padding: 1px;
    font-size: 14px;
    margin: 1px 0 1px 0;
  }

  tr:hover {
    background-color: #ededed;
  }

  .refreshicon {
    transition: transform 2s;
  }

  .refreshicon:hover {

    animation-name: spin;
    animation-duration: 1000ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }
</style>