import { defineStore } from 'pinia'
import axios from 'axios'
import { useExportTask } from '../store/exportTask'
import moment from 'moment'

export const usedashboardTask = defineStore('dashboardTask',{
    state: () => ({
        entries: '',
        show:[],
        filteredExport:[],
        dataObj:{},
        dataCSV: {
            data: []
          },
        statusSelect:'',
        complete: 'completeForm',
        headers: [
                {
                    src: 'patfirst', 
                    dest: 'pat_first_name',

            }
        ],
        header: {
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

          },
          sectionName:['generalData','preAdmissionData', 'natureOfInjury','ExternalCauseOfInjury','hospitalFacilityData','inPatient','forTransportVehicularAccident'],
          exportDataList:[],
          exportEnccodeList: [],
          test:[],
          names:[{
            pat_last_name:'x',
            pat_first_name:'y',
            pat_middle_name:'z'
          },
          {
            pat_last_name:'q',
            pat_first_name:'w',
            pat_middle_name:'e'
          },
          {
            pat_last_name:'a',
            pat_first_name:'s',
            pat_middle_name:'d'
          },
        ]

    }),
    setup(){
      const exportTask = useExportTask()
        return {exportTask}
    },
    actions:{
        click(){
            console.log("actions", this.exportTask.name)
        }
    },
    getters:{
        async getStoredList(){
            const data = await axios.get("http://192.168.7.66:8040/api/injuryList")
            let x = (this.entries = data.data)
            return x
        },

        async getRetrieveInjuryDataJson() { // ~> loop and get data from each section table
          var x = this.sectionName
          var y = await this.getFilterPatEnccode
          var a = this.exportDataList
          for(var i=0; i<y.length;i++){
            let temp=[]

            for(var z=0;z<x.length;z++){
              // console.log(y[z])

              const enccode = {
                enccode: y[i],
                section: x[z]
              }
              const response = await axios.post("http://192.168.7.66:8040/api/spInjuryGetDataPerTable", enccode)
              // console.log("response", response.data)
              
              response.data.forEach(item => {
                temp[item.exportColumn] = item.value
              })
            }
            
            // console.log("temp",temp)
            a.push(temp)
          }
          // console.log("a",a)
          
          return a
        },
        async getFilterPatEnccode(){
          const x = await this.getFilterPat
          
          let y = this.exportEnccodeList
          // console.log(y)

          for(var i=0;i<x.length;i++){
            y.push(x[i].enccode1)
          }
          // console.log("x",x)
          return y
        },
        async getFilterPat(){
            let x = await this.getStoredList

            let y = x.filter((patInfo) => {return this.complete.toLowerCase().split(" ").every(v => patInfo.eStatus && patInfo.eStatus.toLowerCase().includes(v))})
            let temp = []
            for(let i=0; i< y.length; i++){
               let s = Object.fromEntries(Object.entries(y[i]).filter(([_, v]) => v != null && v!= "" && _));
              temp.push(s)
            }

            // console.log(temp, "temp");
            return temp

        },
        async listInsertToDataCSV(){
          // const mapArr = this.filteredExport.map()
            let x = await this.getRetrieveInjuryDataJson
            let j = await this.getFilterPat
            let aa = []
            let temp = {}
            // let tempN = this.names
            // let bb = []
            // console.log("j",j)
            for(var p=0; p<x.length ; p++){
              
            let z = Object.assign(x[p],j[p])
            x[p].pat_first_name = x[p].patfirst
            x[p].pat_middle_name = x[p].patmiddle
            x[p].pat_last_name = x[p].patlast
            x[p].encounter_date = moment(x[p].encounter_date).format('MM-DD-YYYY')
            x[p].encounter_time = moment(x[p].encounter_time).format('HH:MM:SS')
            x[p].admdate = moment(x[p].admdate).format('MM-DD-YYYY')
            x[p].disdate = moment(x[p].disdate).format('MM-DD-YYYY')
            x[p].pat_date_of_birth = moment(x[p].pat_date_of_birth).format('MM-DD-YYYY')
            x[p].inj_date = moment(x[p].inj_date).format('MM-DD-YYYY')
            x[p].inj_time = moment(x[p].inj_time).format('HH:MM:SS')
            x[p].status = ''
            // console.log('x',x[p].patfirst)
            aa.push(z)
            }
            // console.log('aa',aa)
            // let arr = []
            // for(var h=0;h<j.length;h++){
            //   let obj1 ={}
            //   obj1['pat_first_name'] = j[h].patfirst
            //   obj1['pat_middle_name'] = j[h].patmiddle
            //   obj1['pat_last_name'] = j[h].patlast
            //   arr.push(obj1)
            //   for(const[key] of Object.entries(arr)){
            //     temp[key] = arr[h][key]
            //   }
            // }
            // console.log("j",j)
            // console.log("x",x)
            // console.log('aa',aa[0])

            
            // let one = {dog: '', cat: '', bird: ''}
            // let two = [{dog: 'aso', cat: 'pusa', snake:'snape'},{dog: 'browny', cat: 'garfield', bird: 'yellow bird'}]
            // let two = {dog: 'browny', cat: 'garfield', bird: 'yellow bird'}
            // let three ={}
            // let b = []
            
            // console.log(Object.values(two[0]))
            // let c = Object.keys(one)
            // let d = Object.values(two[0])
            // console.log(d)
            // three[c] = d
            // three['c'] = 'd'
            // console.log(three)
            // console.log(c)

            // Object.keys(two[0]).forEach(key => 
            //   // console.log(key)
            //   three[key] = d
            // )
            // console.log(three)
            // let a = Object.assign({},one, two[0])

            // console.log(a)
            //   b.push(a)
              
              // Object.values(two[o]).forEach(key => 
              
              // )
              // let a = Object.assign(three, two[o])
              // b.push(a)
              // Object.values(two[o]).forEach(key => console.log(key))
            
            // console.log('two',two)
            // console.log('b',b)
            // console.log('3',three)
            // for(const[value] of Object.values(aa[0])){
            //   // console.log(key)
            //   console.log('value',value)
            // }

            // console.log('temp',temp)
            
            // let ab = Object.keys(this.header)
            // let ba = Object.values(aa[i])
            // console.log(aa)
            let arrTemp =[]
            // console.log()
            // const key = Object.keys(this.header)
            // console.log(key)
            // arrTemp[key] = ''
            // console.log(arrTemp)

            for(var i = 0; i < aa.length; i++){
              // console.log(aa[i])
              // let key = Object.keys(this.header)
              // let value = Object.values(aa[i])
              for(const[key] of Object.entries(this.header)){
                // console.log(key)

                temp[key] = ''
                // temp[key] = Object.values(aa[i])
                  // console.log(aa[0][key])
              }
             let x =  Object.assign({},temp,aa[i])

              // temp = aa[i]
              // console.log(key)
              // temp[key] = aa[value]
              // temp[key] = ''
              // const value = Object.values(aa[i])
              // temp[key] = ''
              console.log(x)
              arrTemp.push(temp)
            }
            // console.log(arrTemp)
            // console.log('aa',aa)
              // console.log('temp', temp)
            // console.log(temp)
            
             
            // for(var i = 0; i < aa.length; i++){
              // EDIT HERE
              // for(const[key] of Object.entries(this.header)){
              //   temp[key] = aa[i][key]
              // }
              // console.log(temp)

              // for(const[key] of Object.entries(this.header)){
              //   console.log(key)

              //   // temp[key] = aa[i]

              //   // if(aa[i][key]==null){
              //   //   aa[i][key] = ''
              //   //   temp[key] = aa[i]
              //   //   // temp[key].push(aa[i][key][i])
              //   // }else{
              //   //   temp[key] = aa[i]
              //   //   // temp[key].push(aa[i][key][i])
              //   // }
              // }
              // this.dataCSV.data.push(temp)
            // }
            // console.log('temp',temp)
            // console.log("dataCSV.data ", this.dataCSV.data[2])
        },
    }
})