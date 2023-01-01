<template>

    <div class="container-fluid" id="mainContainer">
        <!-- first panel -->
        <div>
            <!-- general data -->
            <div class="row p-2 text-white bg-success" >GENERAL DATA:</div>

            <div class="row" style="border: 1px solid black">
                <div class="col border">
                    <div class="row ">
                        <div class="col" id="firstPanel">
                            <div class="row">
                                <div class="col">
                                    <div class="row">
                                        <div class="col" id="patname">
                                            <div class="row">
                                                <div class="col">
                                                    <i>Last name: </i> 
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col">
                                                    <b>{{ this.patTask.header[0].patlast }}</b>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class="row">
                                                <div class="col">
                                                    <i>First name (w/ suffix)</i> 
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col">
                                                    <!-- <label for=""> <b>{{ this.patReg.patfirst }}</b></label> -->
                                                    <b>{{ this.patTask.header[0].patfirst }}</b>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class="row">
                                                <div class="col">
                                                    <i>Middle name</i> 
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col">
                                                    <b>{{ this.patTask.header[0].patmiddle }}</b>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div class="col border-start border-secondary divpat">
                                    <div class="row">
                                        <div class="col ">
                                            Registry No:
                                            <input type="text" readonly class="inputlabelunderlineName" v-model="form1.reg_no">
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col">
                                            Philhealth No:
                                            <input type="text" readonly class="inputlabelunderlineName" v-model="form1.pat_phil_health_no"
                                            >
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col" style="border-top: 1px solid black; line-height:1" id="divaddress">
                                    Current Address
                                    <div class="row">
                                        <div class="col">
                                            <div class="row">
                                                <div class="col">
                                                    <i>Region Name</i>
                                                </div>
                                            </div>

                                            <div class="row">
                                                <div class="col">
                                                    <b>{{ this.patTask.header[0].pat_current_address_region_name }}</b>
                                                </div>
                                            </div>

                                        </div>
                                        <div class="col">
                                            <div class="row">
                                                <div class="col">
                                                    <i>Province</i>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col">
                                                    <label class="form-check-label" for=""><b>{{ this.patTask.header[0].pat_current_address_province_name }}</b></label>
                                                    
                                                </div>
                                            </div>

                                        </div>
                                        <div class="col">
                                            <div class="row">
                                                <div class="col">
                                                    <i>City/Municipality</i>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col">
                                                    <label for=""><b>{{ this.patTask.header[0].pat_current_address_city_name }}</b></label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class="row">
                                                <div class="col">
                                                    <i>Barangay</i>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col">
                                                    <b>{{ this.patTask.header[0].pat_current_address_brgy_name }}</b>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col" id="divaddress" style="line-height:1">
                                    Temporary Address
                                    <div class="row">
                                        <div class="col">
                                            <i>Region name</i>
                                            <div>
                                                <select id="temp_regcode" 
                                                    class=" regioncategory inputlabelunderlineName"
                                                    aria-label=".form-select-sm example">
                                                    <option></option>
                                                    <!-- <option value="{{$patients->temp_regcode}}" id="opTempregode"></option> -->
                                                    <option id="">---</option>

                                                    <option> </option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col">
                                            <i>Province name</i>
                                            <div>

                                                <select id="temp_provcode" 
                                                    class="form-select-sm regioncategory inputlabelunderlineName"
                                                    aria-label=".form-select-sm example">
                                                    <option></option>
                                                    <option>---</option>
                                                </select>

                                            </div>
                                        </div>
                                        <div class="col">
                                            <i>City/Municipality</i>
                                            <div>

                                                <select id="temp_citycode" 
                                                    class="form-select-sm regioncategory inputlabelunderlineName"
                                                    aria-label=".form-select-sm example">
                                                    <option></option>
                                                    <option>---</option>
                                                </select>

                                            </div>
                                        </div>
                                        <div class="col">
                                            <i>Barangay</i>
                                            <div>

                                                <select id="temp_bgycode" name="temp_bgycode"
                                                    class="form-select-sm regioncategory inputlabelunderlineName"
                                                    aria-label=".form-select-sm example">
                                                    <option></option>
                                                    <option>---</option>
                                                </select>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col" id="divaddress" style="line-height:1">
                                    Place of incident
                                    <div class="row">

                                        <div class="col">
                                            <i>Region name </i>
                                            <div class="row">
                                                <div class="col-auto">
                                                    <select id="plc_regcode" v-model="form1.generalData.plc_regcode" @click="regionCodeInput"
                                                        class="form-select  inputlabelunderlineName"
                                                        aria-label=".form-select-sm example">
                                                        <option v-for="x in regionCode" :key="x" v-bind:value="x.regcode">
                                                            {{ x.regname }}
                                                         </option>
                                                    </select>
                                                </div>
                                            </div>

                                        </div>
                                        <div class="col ">
                                            <i>Province Name</i>
                                            <div class="row">
                                                <div class="col">
                                                    <select id="plc_provcode" v-model="form1.generalData.plc_provcode" @click="provinceCodeInput"
                                                        class="form-select inputlabelunderlineName"
                                                        aria-label=".form-select-sm example">
                                                        <option v-for="x in provinceCode" :key="x" v-bind:value="x.provcode">
                                                            {{ x.provname }}
                                                         </option>
                                                    </select>

                                                </div>
                                            </div>
                                        </div>

                                        <div class="col">
                                            <i>City Name</i>
                                            <div class="row">
                                                <div class="col">
                                                    <select id="plc_ctycode" v-model="form1.generalData.plc_ctycode"
                                                        class="form-select inputlabelunderlineName"
                                                        aria-label=".form-select-sm example">
                                                        <option v-for="x in cityCode" :key="x" v-bind:value="x.ctycode">
                                                            {{ x.ctyname }}
                                                         </option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col">
                                            <i>Barangay Name</i>
                                            <div class="row">
                                                <div class="col">
                                                    <select id="plc_bgycode" name="plc_bgycode"
                                                        class="form-select inputlabelunderlineName "
                                                        aria-label=".form-select-sm example">
                                                        <option></option>
                                                        <option>---</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row ">
                                <div class="col col-sm-4 border-top border-end border-secondary" id="divbday">
                                    <div class="row">
                                        <div class="col">
                                            <div class="row">
                                                <div class="col-auto">
                                                    Birthday:

                                                </div>
                                                <div class="col-auto">

                                                    <b>{{ convertDate(this.patTask.header[0].pat_date_of_birth) }}</b>
                                                </div>
                                            </div>

                                            <div class="row">
                                                <div class="col" id="divsex">
                                                    Sex:
                                                    <label for=""> <b>{{ this.patTask.header[0].patsex }}</b></label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class="row">
                                                <div class="col">
                                                    Age: <b>{{ this.patTask.header[0].age_years }}</b>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col">
                                                    Months: 
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col">
                                                    Days:
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col border-top border-secondary p-2" id="divbday">
                                    <div class="row">
                                        <div class="col">
                                            <div class="d-flex flex-row">
                                                <div class="me-4">
                                                    <div class="d-block">Injury Date</div>
                                                    <div class="d-block"> 
                                                        <b>{{ convertDate(this.patTask.header[0].inj_date) }}</b>
                                                    </div>
                                                </div>
                                                <div class="me-4">
                                                    <div class="d-block">Encounter date</div>
                                                    <div class="d-block">
                                                        <b>{{ convertDate(this.patTask.header[0].encounter_date) }}</b>
                                                        <!-- <input type="text" readonly
                                                            class="inputlabelunderlineName" name="encounter_date"
                                                            id="encounter_date"> -->
                                                        </div>
                                                </div>
                                                <div >
                                                    <div class="d-block">
                                                        Date report
                                                    </div>
                                                    <div class="d-block">
                                                        <input type="date" class="inputlabelunderlineName"
                                                            id="appt" v-model="form1.generalData.date_report">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col">
                                            <div class="d-flex flex-row">
                                                <div class="me-4">
                                                    Injury Time
                                                    <div class="row">
                                                        <div class="">

                                                            <b>{{ convertTime(this.patTask.header[0].inj_time) }}</b>

                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="me-4">
                                                    Encounter time
                                                    <div class="row">
                                                        <div class="col-auto">
                                                            <!-- <input type="time" class="inputlabelunderlineName" max="18:00" name="encounter_time" id="encounter_time" value="{{$patients->encounter_time}}"> -->
                                                            <!-- {{date('H:i:s',  strtotime($patients->encounter_time))}} -->
                                                            <b>{{ convertTime(this.patTask.header[0].encounter_time) }}</b>

                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    Time report
                                                    <small><i style="color:red;"></i></small>
                                                    <div class="row">
                                                        <div class="col-auto">
                                                            <input type="time" class="inputlabelunderlineName" id="appt"
                                                                v-model="form1.generalData.time_report" max="18:00">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row border-top border-secondary p-1">
                                <div class="col">
                                    <div class="row">
                                        <div class="col">
                                            <div class="row">
                                                <div class="col">
                                                    Facility Region:   <b><label for="">CAR</label></b>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class="row">
                                                <div class="col">
                                                    Facility Province: <b><label for="">BENGUET</label></b>
                                                </div>
                                            </div>
                                            <div class="row">

                                                <div class="col">
                                                    
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col">
                                            <div class="row">
                                                <div class="col">
                                                    Facility City: <b><label for="">BAGUIO CITY</label></b>

                                                </div>

                                            </div>
                                            <div class="row">
                                                <div class="col">
                                                    
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class="row">
                                                <div class="col">
                                                    Facility No:
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>
                            <div class="row border-top border-secondary p-1">

                                <div class="col">
                                    <div class="row">
                                        <div class="col-auto ">
                                            Hospital Patient ID No.: <input type="text" class="inputlabelunderlineName" v-model="form1.hpercode">
                                        </div>
                                    </div>
                                </div>
                                <div class="col" >
                                    <div class="row">
                                        <div class="col-auto " >
                                            Hospital Reg No.: <input type="text" class="inputlabelunderlineName" name="hosp_reg_no">
                                        </div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="row">
                                        <div class="col-auto">
                                            Hospital Case No.: <input type="text" class="inputlabelunderlineName" name="hosp_cas_no">
                                        </div>
                                    </div>
                                </div>
                            </div>



                        </div>
                    </div>
                </div>
            </div>
            <!-- Pre addmission data -->
            <div class="row p-2 text-white bg-success" >PRE-ADMISSION DATA:</div>
            <div class="row border border-secondary" style="line-height:1;page-break-after: always;">
                <div class="col ">
                    <div class="row">
                        <div class="col">
                            <div class="row">
                                <div class="col-auto">
                                    Injury Intent:
                                </div>
                                <div class="col-auto">
                                    <input class="form-check-input mt-0" type="radio" v-model="form1.preAdmissionData.inj_intent_code"
                                    id="Unintentional/Accidental" value="01">
                                    <label class="form-check-label" for="Unintentional/Accidental"
                                    id="divpat1">Unintentional/Accidental</label>
                                </div>
                                <div class="col-auto">
                                    <input class="form-check-input mt-0" type="radio" v-model="form1.preAdmissionData.inj_intent_code"
                                        id="IntentionalV" value="02">
                                    <label class="form-check-label" for="IntentionalV">Intentional
                                        (violence)</label>
                                </div>
                                <div class="col-auto">
                                    <input class="form-check-input mt-0" type="radio" v-model="form1.preAdmissionData.inj_intent_code" id="VAWC"
                                        value="04">
                                    <label for="VAWC"> VAWC Patient</label>

                                </div>
                                <div class="col-auto">
                                    <input class="form-check-input mt-0" type="radio" v-model="form1.preAdmissionData.inj_intent_code"
                                        id="IntentionalS" value="03">
                                    <label class="form-check-label" for="IntentionalS">Intentional(self-inflict)</label>

                                </div>
                                <div class="col-auto">
                                    <input class="form-check-input mt-0" type="radio" v-model="form1.preAdmissionData.inj_intent_code"
                                        id="Undetermined" value="99">
                                    <label class="form-check-label" for="Undetermined">Undetermined</label>

                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="row ">
                        <div class="col ">
                            <div class="row">
                                <div class="col-auto">
                                    <label class="firstAid">First Aid Given: </label>
                                </div>
                                <div class="col-auto">
                                    <!-- <input type="hidden" name="rdoAid" value="N"> -->
                                    <input class="form-check-input mt-0" type="radio" v-model="form1.preAdmissionData.first_aid_code" id="aidYes" value="Y">
                                    <label class="form-check-label" for="aidYes">
                                        Yes</label>
                                </div>
                                <div class="col-auto">

                                    <input class="form-check-input mt-0" type="radio" v-model="form1.preAdmissionData.first_aid_code" id="aidNo" value="N">
                                    <label class="form-check-label" for="aidNo">
                                        No</label>

                                </div>
                                <div class="col-auto">

                                    <input class="form-check-input mt-0" type="radio" v-model="form1.preAdmissionData.first_aid_code" id="aidUnk" value="U">
                                    <label class="form-check-label" for="aidUnk">
                                        Unknown</label>

                                </div>
                                
                            </div>
                            
                        </div>
                        
                    </div>
                    <div>
                        <div  id="frsAidComm">
                            <textarea class="form-control" :disabled="form1.preAdmissionData.first_aid_code=='N'" v-model="form1.preAdmissionData.firstaid_others"  rows="2" style="line-height:1;"
                                 ></textarea>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <div class="row">
                                <div class="col ">(By whom if yes):</div>
                            </div>
                            <div class="row">
                                <div class="col-2 col-print-12" id="docAdmitCol">
                                    <input type="text" :disabled="form1.preAdmissionData.first_aid_code!='Y'" v-model="form1.preAdmissionData.firstaid_others2" id="docAdmit"
                                         class="form-control form-control-sm">
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <hr>
                <div class="" style="line-height:1;">
                    <h6>Nature of Injury/ies:</h6>
                    <div class="innerdiv ">
                        <div class="row divpat1">
                            <div class="d-flex flex-row">
                                <div>
                                    <Label>Multiple injuries?</Label>
                                </div>
                                <div>
                                    <input class="form-check-input mt-0" type="radio" v-model="form1.natureOfInjury.mult_inj" 
                                        id="injuryRdo1" value="Y">
                                    <label class="form-check-label" for="injuryRdo1">
                                        Yes
                                    </label>
                                </div>
                                <div>
                                    <input class="form-check-input mt-0" type="radio" v-model="form1.natureOfInjury.mult_inj" id="injuryRdo2"
                                        value="N">
                                    <label class="form-check-label" for="injuryRdo2">
                                        No
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div class="form-group row-md-4" >
                            <div class="col divpat1">

                                <div class="row">
                                    <div class="col col-lg-5">
                                        <input class="form-check-input mt-0" type="checkbox" v-model="form1.natureOfInjury.noi_abrasion"
                                            id="Abrasion" :true-value="'Y'" :false-value="'N'">
                                        <label class="form-check-label" for="Abrasion">
                                            Abrasion
                                        </label>
                                        <input :disabled="form1.natureOfInjury.noi_abrasion=='N'" type="text" class="inputlabelunderline"
                                            v-model="form1.natureOfInjury.noi_abradtl" id="abrasionInput" >
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col col-lg-5">
                                        
                                        <input class="form-check-input mt-0" type="checkbox" v-model="form1.natureOfInjury.noi_avulsion" id="noi_avuldtl"
                                        :true-value="'Y'" :false-value="'N'">
                                        <label class="form-check-label" for="noi_avuldtl">
                                            Avulsion
                                        </label>
                                        <input :disabled="form1.natureOfInjury.noi_avulsion=='N'" type="text" class="inputlabelunderline" v-model="form1.natureOfInjury.noi_avuldtl"
                                            id="avulsionInput" >
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-auto">
                                        
                                        <input class="form-check-input mt-0" type="checkbox" v-model="form1.natureOfInjury.noi_burn_r" id="noi_burn_r"
                                        :true-value="'Y'" :false-value="'N'">

                                        <label class="form-check-label" for="noi_burn_r">
                                            Burn (Degree of Burn & Extent of Body Surface involved) Degree:
                                        </label>
                                    
                                        <div class="d-inline p-1">
                                            <input :disabled="form1.natureOfInjury.noi_burn_r=='N'" class="form-check-input mt-0" type="checkbox" v-model="form1.natureOfInjury.degree_burn1"
                                                id="degree_burn1" :true-value="'1st degree'" :false-value="''">
                                            <label class="form-check-label" for="degree_burn1">
                                                1<sup>st</sup>
                                            </label>
                                        </div>
                                        <div class="d-inline p-1">
                                        
                                            <input :disabled="form1.natureOfInjury.noi_burn_r=='N'" class="form-check-input mt-0" type="checkbox" v-model="form1.natureOfInjury.degree_burn2"
                                                id="degree_burn2" :true-value="'2nd degree'" :false-value="''">
                                            <label class="form-check-label" for="degree_burn2">
                                                2<sup>nd</sup>
                                            </label>
                                        </div>
                                        <div class="d-inline p-1">
                                        
                                            <input :disabled="form1.natureOfInjury.noi_burn_r=='N'" class="form-check-input mt-0" type="checkbox" v-model="form1.natureOfInjury.degree_burn3"
                                                id="degree_burn3" :true-value="'3rd degree'" :false-value="''">
                                            <label class="form-check-label" for="degree_burn3">
                                                3<sup>rd</sup>
                                            </label>
                                        </div>
                                        <div class="d-inline p-1">
                                        
                                            <input :disabled="form1.natureOfInjury.noi_burn_r=='N'" class="form-check-input mt-0" type="checkbox" v-model="form1.natureOfInjury.degree_burn4"
                                                id="degree_burn4" :true-value="'4th degree'" :false-value="''">
                                            <label class="form-check-label" for="degree_burn4">
                                                4<sup>th</sup>
                                            </label>
                                        </div>
                                        <div class="d-inline p-1">
                                            <label>Site:</label>
                                            <input :disabled="form1.natureOfInjury.noi_burn_r=='N'" type="text" class="inputlabelunderline" v-model="form1.natureOfInjury.noi_burndtl"
                                                id="burnChInput" >
                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col col-lg-5">
                                        
                                        <input class="form-check-input mt-0" type="checkbox" v-model="form1.natureOfInjury.noi_concussion"
                                            id="noi_concussion" :true-value="'Y'" :false-value="'N'">
                                        <label class="form-check-label" for="noi_concussion">
                                            Concussion
                                        </label>
                                        <input :disabled="form1.natureOfInjury.noi_concussion=='N'" type="text" class="inputlabelunderline" v-model="form1.natureOfInjury.noi_concussiondtl"
                                            id="concussionInput" >
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col col-lg-5">
                                        
                                        <input class="form-check-input mt-0" type="checkbox" v-model="form1.natureOfInjury.noi_contusion"
                                            id="noi_contusion" :true-value="'Y'" :false-value="'N'">
                                        <label class="form-check-label" for="noi_contusion">
                                            Contusion
                                        </label>
                                        <input :disabled="form1.natureOfInjury.noi_contusion=='N'" type="text" class="inputlabelunderline" v-model="form1.natureOfInjury.noi_contudtl"
                                            id="contusionInput" >
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col col-lg-5">
                                        
                                        <input class="form-check-input mt-0" type="checkbox" v-model="form1.natureOfInjury.fractureCh"
                                            id="fractureCh" :true-value="'Y'" :false-value="'N'">

                                        <label class="form-check-label" for="fractureCh">
                                            Fracture
                                        </label>
                                        <div class="container">
                                            <div class="row mx-md-n5">
                                                <div class="col px-md-5">

                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        
                                                        <input :disabled="form1.natureOfInjury.fractureCh=='N'" class="form-check-input mt-0" type="checkbox"
                                                            v-model="form1.natureOfInjury.noi_frac_ope" id="noi_frac_ope" :true-value="'Y'" :false-value="'N'">
                                                        <label class="form-check-label" for="noi_frac_ope">
                                                            Open Type
                                                        </label>
                                                        <input type="text" class="inputlabelunderline" :disabled="form1.natureOfInjury.noi_frac_ope=='N'"
                                                             v-model="form1.natureOfInjury.noi_fropdtl" id="openTypeInput">
                                                        <label class="form-check-label" for="Open Type">
                                                            (ex. comminuted, depressed fracture)
                                                        </label>
                                                    </label>
                                                </div>
                                            </div>

                                            <div class="row mx-md-n5">
                                                <div class="col px-md-5">

                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        
                                                        <input :disabled="form1.natureOfInjury.fractureCh=='N'" class="form-check-input mt-0" type="checkbox"
                                                            v-model="form1.natureOfInjury.noi_frac_clo" id="noi_frac_clo" :true-value="'Y'" :false-value="'N'">
                                                        <label class="form-check-label" for="noi_frac_clo">
                                                            Closed Type
                                                        </label>
                                                        <input type="text" class="inputlabelunderline" :disabled="form1.natureOfInjury.noi_frac_clo=='N'" v-model="form1.natureOfInjury.noi_frcldtl"
                                                            id="closedTypeInput"  >
                                                        <label class="form-check-label" for="noi_frcldtl">
                                                            (ex. Compound, infected fracture)
                                                        </label>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col col-lg-12">
                                        
                                        <input class="form-check-input mt-0" type="checkbox" v-model="form1.natureOfInjury.noi_owound" id="noi_owound"
                                        :true-value="'Y'" :false-value="'N'">
                                        <label class="form-check-label" for="noi_owound">
                                            <label class="form-check-label" for="noi_owound">
                                                Open/Wound Laceration
                                            </label>
                                            <input :disabled="form1.natureOfInjury.noi_owound=='N'" type="text" class="inputlabelunderline"  v-model="form1.natureOfInjury.noi_owoudtl"
                                                id="woundInput" >
                                        </label>
                                    </div>
                                    <label class="form-check-label" for="flexCheckDefault">
                                        (ex. hacking, gunshot, stabbing, animal(dog, cat, rat, snake, etc) bites,
                                        human
                                        bites, insect bites, punctured wound, etc)
                                    </label>
                                </div>

                                <div class="row">
                                    <div class="col col-lg-5">
                                        
                                        <input class="form-check-input mt-0" type="checkbox" v-model="form1.natureOfInjury.noi_amp" id="noi_amp"
                                        :true-value="'Y'" :false-value="'N'">

                                        <label class="form-check-label" for="noi_amp">
                                            Traumatic Amputation
                                        </label>
                                        <input :disabled="form1.natureOfInjury.noi_amp=='N'" type="text" class="inputlabelunderline" v-model="form1.natureOfInjury.noi_ampdtl"
                                            id="traumaInput" >
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col col-lg-8">
                                        
                                        <input class="form-check-input mt-0" type="checkbox" v-model="form1.natureOfInjury.noi_others" id="noi_others"
                                        :true-value="'Y'" :false-value="'N'">

                                        <label class="form-check-label" for="noi_others">
                                            Others: Pls. specify injury and the body part/s affected:
                                        </label>
                                        <input :disabled="form1.natureOfInjury.noi_others=='N'" type="text" class="inputlabelunderline" v-model="form1.natureOfInjury.noi_otherinj"
                                            id="others1Input">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <hr>

                <div class="" id="externalDiv" style="line-height:1;">
                    <h6>External Cause/s of Injury/ies:</h6>
                    <div class="innerdiv">
                        <div class="row">
                            <div class="col divpat1">
                                <div class="row">
                                    <div class="col">
                                        <input class="form-check-input mt-0" type="checkbox" v-model="form1.ExternalCauseOfInjury.ext_bite" id="ext_bite"
                                        :true-value="'Y'" :false-value="'N'">
                                        <label class="form-check-label" for="ext_bite">
                                            Bites/stings, Specify animal/insect:
                                        </label>
                                        <input :disabled="form1.ExternalCauseOfInjury.ext_bite=='N'" type="text" class="inputlabelunderline" v-model="form1.ExternalCauseOfInjury.ext_bite_sp"
                                            id="biteInput">
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-auto">
                                        <div class="d-inline">
                                            <input class="form-check-input mt-0" type="checkbox" v-model="form1.ExternalCauseOfInjury.ext_burn_r" id="burn1Ch"
                                            :true-value="'Y'" :false-value="'N'">
                                            <label class="form-check-label" for="burn1Ch">
                                                Burn,
                                            </label>
                                        </div>
                                        <div class="d-inline p-1">
                                            <input :disabled="form1.ExternalCauseOfInjury.ext_burn_r=='N'" class="form-check-input mt-0" type="radio" value="01" v-model="form1.ExternalCauseOfInjury.ref_burn_code"
                                                id="Heat">
                                            <label class="form-check-label" for="Heat">
                                                Heat
                                            </label>
                                        </div>
                                    
                                        <div class="d-inline p-1">
                                            <input :disabled="form1.ExternalCauseOfInjury.ext_burn_r=='N'" class="form-check-input mt-0" type="radio" value="02" v-model="form1.ExternalCauseOfInjury.ref_burn_code"
                                                id="Fire">
                                            <label class="form-check-label" for="Fire">
                                                Fire
                                            </label>
                                        </div>
                                    
                                        <div class="d-inline p-1">
                                            <input :disabled="form1.ExternalCauseOfInjury.ext_burn_r=='N'" class="form-check-input mt-0" type="radio" value="03" v-model="form1.ExternalCauseOfInjury.ref_burn_code"
                                            id="Electricty">
                                            <label class="form-check-label" for="Electricty">
                                                Electricty
                                            </label>
                                        </div>
                                    
                                        <div class="d-inline p-1">
                                            <input :disabled="form1.ExternalCauseOfInjury.ext_burn_r=='N'" class="form-check-input mt-0" type="radio" value="04" v-model="form1.ExternalCauseOfInjury.ref_burn_code" id="Oil">
                                            <label class="form-check-label" for="Oil">
                                                Oil
                                            </label>
                                        </div>
                                    
                                        <div class="d-inline p-1">
                                            <input :disabled="form1.ExternalCauseOfInjury.ext_burn_r=='N'" class="form-check-input mt-0" type="radio" value="05" v-model="form1.ExternalCauseOfInjury.ref_burn_code"
                                            id="Friction">
                                            <label class="form-check-label" for="Friction">
                                                Friction
                                            </label>
                                        </div>
                                    
                                        <div class="d-inline">
                                            <input :disabled="form1.ExternalCauseOfInjury.ext_burn_r=='N'" class="form-check-input mt-0" type="radio" value="06" v-model="form1.ExternalCauseOfInjury.ref_burn_code"
                                            id="Others2">
                                            <label class="form-check-label" for="Others2">
                                                Others,specify
                                            </label>
                                            <input :disabled="form1.ExternalCauseOfInjury.ref_burn_code!='06'" type="text" class="inputlabelunderline" v-model="form1.ExternalCauseOfInjury.ext_burn_sp"
                                                id="others2Input" >
                                        </div>
                                    </div>

                                </div>
                                <div class="row">
                                    <div class="col col-lg-8">
                                        
                                        <input class="form-check-input mt-0" type="checkbox" v-model="form1.ExternalCauseOfInjury.ext_chem"
                                            id="chemicalCh" :true-value="'Y'" :false-value="'N'">

                                        <label class="form-check-label" for="chemicalCh">
                                            Chemical/Substance, specify
                                        </label>
                                        <input :disabled="form1.ExternalCauseOfInjury.ext_chem=='N'" type="text" class="inputlabelunderline" v-model="form1.ExternalCauseOfInjury.ext_chem_sp"
                                            id="chemInput" >

                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col col-lg-8">
                                        
                                        <input class="form-check-input mt-0" type="checkbox" v-model="form1.ExternalCauseOfInjury.ext_sharp" id="sharpCh"
                                        :true-value="'Y'" :false-value="'N'">
                                        <label class="form-check-label" for="sharpCh">
                                            Contact with sharp objects, specify object
                                        </label>
                                        <input :disabled="form1.ExternalCauseOfInjury.ext_sharp=='N'" type="text" class="inputlabelunderline" v-model="form1.ExternalCauseOfInjury.ext_sharp_sp"
                                            id="sharpInput" >
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-auto">
                                        
                                        <input class="form-check-input mt-0" type="checkbox" v-model="form1.ExternalCauseOfInjury.ext_drown_r"
                                            id="drowningCh" :true-value="'Y'" :false-value="'N'">
                                        <label class="form-check-label" for="drowningCh">
                                            Drowning: Type/Body of Water:
                                        </label>
                                    
                                        <div class="d-inline p-1">
                                            <input :disabled="form1.ExternalCauseOfInjury.ext_drown_r=='N'" class="form-check-input mt-0" type="radio" value="01" v-model="form1.ExternalCauseOfInjury.ref_drowning_cope"
                                            id="Sea">
                                            <label class="form-check-label" for="Sea">
                                                Sea
                                            </label>
                                        </div>
                                    
                                        <div class="d-inline">
                                            <input :disabled="form1.ExternalCauseOfInjury.ext_drown_r=='N'" class="form-check-input mt-0" type="radio" value="02" v-model="form1.ExternalCauseOfInjury.ref_drowning_cope"
                                            id="River">
                                            <label class="form-check-label" for="River">
                                                River
                                            </label>
                                        </div>
                                    
                                        <div class="d-inline p-1">
                                            <input :disabled="form1.ExternalCauseOfInjury.ext_drown_r=='N'" class="form-check-input mt-0" type="radio" value="03" v-model="form1.ExternalCauseOfInjury.ref_drowning_cope"
                                            id="Lake">
                                            <label class="form-check-label" for="Lake">
                                                Lake
                                            </label>
                                        </div>
                                    
                                        <div class="d-inline p-1">
                                            <input :disabled="form1.ExternalCauseOfInjury.ext_drown_r=='N'" class="form-check-input mt-0" type="radio" value="04" v-model="form1.ExternalCauseOfInjury.ref_drowning_cope"
                                            id="Pool">
                                            <label class="form-check-label" for="Pool">
                                                Pool
                                            </label>
                                        </div>
                                    
                                        <div class="d-inline">
                                            <input :disabled="form1.ExternalCauseOfInjury.ext_drown_r=='N'" class="form-check-input mt-0" type="radio" value="05" v-model="form1.ExternalCauseOfInjury.ref_drowning_cope"
                                            id="BathTub">
                                            <label class="form-check-label" for="BathTub">
                                                Bath Tub
                                            </label>
                                        </div>
                                    
                                        <div class="d-inline p-1">
                                            <input :disabled="form1.ExternalCauseOfInjury.ext_drown_r=='N'" class="form-check-input mt-0" type="radio" value="06" v-model="form1.ExternalCauseOfInjury.ref_drowning_cope"
                                            id="Others3">
                                            <label class="form-check-label" for="Others3">
                                                Others,specify
                                            </label>
                                            <input :disabled="form1.ExternalCauseOfInjury.ref_drowning_cope!='06'" type="text" class="inputlabelunderline" v-model="form1.ExternalCauseOfInjury.ext_drown_sp"
                                                id="others3Input" >
                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-auto">
                                        
                                        <input class="form-check-input mt-0" type="checkbox" v-model="form1.ExternalCauseOfInjury.ext_expo_nature_r" id="natureCh"
                                            :true-value="'Y'" :false-value="'N'">
                                        <label class="form-check-label" for="natureCh">
                                            Exposure to forces of Nature:
                                        </label>
                                    
                                        <div class="d-inline p-1">
                                            <input :disabled="form1.ExternalCauseOfInjury.ext_expo_nature_r=='N'" class="form-check-input mt-0" type="radio" v-model="form1.ExternalCauseOfInjury.ref_expnature_code" id="Earthquake"
                                            value="01">
                                            <label class="form-check-label" for="Earthquake">
                                                Earthquake
                                            </label>
                                        </div>
                                    
                                        <div class="d-inline p-1">
                                            <input :disabled="form1.ExternalCauseOfInjury.ext_expo_nature_r=='N'" class="form-check-input mt-0" type="radio" v-model="form1.ExternalCauseOfInjury.ref_expnature_code" id="Volcanic"
                                            value="02">
                                            <label class="form-check-label" for="Volcanic">
                                                Volcanic eruption
                                            </label>
                                        </div>
                                    
                                        <div class="d-inline p-1">
                                            <input :disabled="form1.ExternalCauseOfInjury.ext_expo_nature_r=='N'" class="form-check-input mt-0" type="radio" v-model="form1.ExternalCauseOfInjury.ref_expnature_code" id="Typhoon"
                                            value="03">
                                            <label class="form-check-label" for="Typhoon">
                                                Typhoon
                                            </label>
                                        </div>
                                    
                                        <div class="d-inline">
                                            <input :disabled="form1.ExternalCauseOfInjury.ext_expo_nature_r=='N'" class="form-check-input mt-0" type="radio" v-model="form1.ExternalCauseOfInjury.ref_expnature_code" id="Landslide"
                                            value="04">
                                            <label class="form-check-label" for="Landslide">
                                                Landslide
                                            </label>
                                        </div>
                                    
                                        <div class="d-inline p-1">
                                            <input :disabled="form1.ExternalCauseOfInjury.ext_expo_nature_r=='N'" class="form-check-input mt-0" type="radio" v-model="form1.ExternalCauseOfInjury.ref_expnature_code" id="natureOth"
                                            value="07">
                                            <label class="form-check-label" for="natureOth">
                                                Others,specify
                                            </label>
                                            <input :disabled="form1.ExternalCauseOfInjury.ref_expnature_code!='07'" type="text" class="inputlabelunderline"
                                                v-model="form1.ExternalCauseOfInjury.ext_expo_nature_sp" id="ext_expo_nature_sp" >
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-auto">
                                        
                                        <input class="form-check-input mt-0" type="checkbox" v-model="form1.ExternalCauseOfInjury.ext_gun" id="gunshotCh"
                                            :true-value="'Y'" :false-value="'N'">

                                        <label class="form-check-label" for="gunshotCh">
                                            Gunshot, Specify weapon
                                        </label>
                                        <input :disabled="form1.ExternalCauseOfInjury.ext_gun=='N'" type="text" class="inputlabelunderline" v-model="form1.ExternalCauseOfInjury.ext_gun_sp"
                                            id="gunshotInput" >
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col col-lg-4">
                                        
                                        <input class="form-check-input mt-0" type="checkbox" v-model="form1.ExternalCauseOfInjury.ext_hang" id="hangingCh"
                                        :true-value="'Y'" :false-value="'N'">
                                        <label class="form-check-label" for="hangingCh">
                                            Hanging/Strangulation
                                        </label>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col col-lg-4">
                                        
                                        <input class="form-check-input mt-0" type="checkbox" v-model="form1.ExternalCauseOfInjury.ext_maul" id="maulingCh"
                                        :true-value="'Y'" :false-value="'N'">
                                        <label class="form-check-label" for="maulingCh">
                                            Mauling/Assault
                                        </label>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col col-lg-4">
                                        
                                        <input class="form-check-input mt-0" type="checkbox" v-model="form1.ExternalCauseOfInjury.ext_transport"
                                            id="transportCh" :true-value="'Y'" :false-value="'N'">
                                        <label class="form-check-label" for="transportCh">
                                            Transport/Vehicular Accident
                                        </label>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-auto">
                                        
                                        <input class="form-check-input mt-0" type="checkbox" v-model="form1.ExternalCauseOfInjury.ext_fall" id="fallCh"
                                            :true-value="'Y'" :false-value="'N'">
                                        <label class="form-check-label" for="fallCh">
                                            Fall, specify, from/in/on/into
                                        </label>
                                        <input :disabled="form1.ExternalCauseOfInjury.ext_fall=='N'" type="text" class="inputlabelunderline" v-model="form1.ExternalCauseOfInjury.ext_falldtl"
                                            id="fallInput" >
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-auto">
                                        <input class="form-check-input mt-0" type="checkbox" v-model="form1.ExternalCauseOfInjury.ext_firecracker_r"
                                            id="firecrackerCh" :true-value="'Y'" :false-value="'N'">
                                        <label class="form-check-label" for="firecrackerCh">
                                            Firecracker:
                                        </label>
                                        <div class="d-inline p-1">
                                            <input :disabled="form1.ExternalCauseOfInjury.ext_firecracker_r=='N'" class="form-check-input mt-0" type="radio" v-model="form1.ExternalCauseOfInjury.firecracker_code"
                                                id="firecracker_code_1" value="03">
                                            <label class="form-check-label" for="firecracker_code_1">
                                                5-star
                                            </label>
                                        </div>
                                        <div class="d-inline p-1">
                                            <input :disabled="form1.ExternalCauseOfInjury.ext_firecracker_r=='N'" class="form-check-input mt-0" type="radio" v-model="form1.ExternalCauseOfInjury.firecracker_code"
                                                id="firecracker_code_2" value="22">
                                            <label class="form-check-label" for="firecracker_code_2">
                                                Bawang
                                            </label>
                                        </div>
                                        <div class="d-inline p-1">
                                            <input :disabled="form1.ExternalCauseOfInjury.ext_firecracker_r=='N'" class="form-check-input mt-0" type="radio" v-model="form1.ExternalCauseOfInjury.firecracker_code"
                                                id="firecracker_code_3" value="01">
                                            <label class="form-check-label" for="firecracker_code_3">
                                                Piccolo
                                            </label>
                                        </div>
                                        <div class="d-inline p-1">
                                            <input :disabled="form1.ExternalCauseOfInjury.ext_firecracker_r=='N'" class="form-check-input mt-0" type="radio" v-model="form1.ExternalCauseOfInjury.firecracker_code"
                                                id="firecracker_code_4" value="06">
                                            <label class="form-check-label" for="firecracker_code_4">
                                                Whistle bomb
                                            </label>
                                        </div>
                                        <div class="d-inline p-1">
                                            <input :disabled="form1.ExternalCauseOfInjury.ext_firecracker_r=='N'" class="form-check-input mt-0" type="radio" v-model="form1.ExternalCauseOfInjury.firecracker_code"
                                                id="firecracker_code_5" value="23">
                                            <label class="form-check-label" for="firecracker_code_5">
                                                Super Lolo
                                            </label>
                                        </div>
                                        <div class="d-inline p-1">
                                            <input :disabled="form1.ExternalCauseOfInjury.ext_firecracker_r=='N'" class="form-check-input mt-0" type="radio" v-model="form1.ExternalCauseOfInjury.firecracker_code"
                                                id="firecracker_code_6" value="88">
                                            <label class="form-check-label" for="firecracker_code_6">Others: </label>
                                            <input :disabled="form1.ExternalCauseOfInjury.firecracker_code!='88'" type="text" class="inputlabelunderline"
                                                v-model="form1.ExternalCauseOfInjury.ext_firecracker_sp" id="firecrackInput" >
                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-auto">
                                        
                                        <input class="form-check-input mt-0" type="checkbox" v-model="form1.ExternalCauseOfInjury.ext_sexual" id="assaultCh"
                                        :true-value="'Y'" :false-value="'N'">
                                        <label class="form-check-label" for="assaultCh">
                                            Sexual Assault/Sexual Abuse/Rape(Alleged)
                                        </label>
                                    </div>
                                </div>


                                <div class="row">
                                    <div class="col-auto">
                                        
                                        <input class="form-check-input mt-0" type="checkbox" v-model="form1.ExternalCauseOfInjury.ext_other" id="others5Ch"
                                        :true-value="'Y'" :false-value="'N'">
                                        <label class="form-check-label" for="others5Ch">
                                            Others,specify
                                        </label>
                                        <input :disabled="form1.ExternalCauseOfInjury.ext_other=='N'" type="text" class="inputlabelunderline" v-model="form1.ExternalCauseOfInjury.ext_other_sp"
                                            id="others5Input" >
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <!-- <hr> -->

            <!-- For transport/vehicular panel -->
            <div class="row border border-secondary">
                <div class="form-group " style="line-height:1;">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col">
                                <h6>FOR TRANSPORT/VEHICULAR ACCIDENT ONLY:</h6>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col border border-secondary divpat1">
                                <div class="row border-bottom border-secondary">
                                    <div class="col-auto">
                                        <label>For transport/vehicular accident only:</label>
                                    </div>
                                    <div class="col-auto">
                                        <input class="form-check-input mt-0" type="radio" v-model="form1.forTransportVehicularAccident.vehicle_type_id" id="Land"
                                            value="01">
                                        <label class="form-check-label mx-auto" for="Land">
                                            Land
                                        </label>
                                    </div>
                                    <div class="col-auto">
                                        <input class="form-check-input mt-0" type="radio" v-model="form1.forTransportVehicularAccident.vehicle_type_id" id="Water"
                                            value="02">
                                        <label class="form-check-label mx-auto" for="Water">
                                            Water
                                        </label>
                                    </div>
                                    <div class="col col-lg-4">
                                        <input class="form-check-input mt-0" type="radio" v-model="form1.forTransportVehicularAccident.vehicle_type_id" id="Air" value="03">
                                        <label class="form-check-label mx-auto" for="Air">
                                            Air
                                        </label>
                                    </div>
                                    <div class="col-auto">
                                        <input class="form-check-input mt-0" type="radio" v-model="form1.forTransportVehicularAccident.ref_veh_acctype_code" id="Collision"
                                            value="10">
                                        <label class="form-check-label mx-auto" for="Collision">
                                            Collision
                                        </label>
                                    </div>
                                    <div class="col-auto">
                                        <input class="form-check-input mt-0" type="radio" v-model="form1.forTransportVehicularAccident.ref_veh_acctype_code" id="Non-Collision"
                                        value="20">
                                        <label class="form-check-label" for="Non-Collision">
                                            Non-Collision
                                        </label>
                                    </div>
                                </div>

                                <div class="row border-bottom border-secondary">
                                    <div class="col-auto">
                                        <h6 class="form-check-label" for="flexCheckDefault">
                                            Severity:
                                        </h6>
                                    </div>
                                    <div class="col-auto">
                                        <input class="form-check-input mt-0" type="radio" v-model="form1.forTransportVehicularAccident.ref_severity" id="Fatal Accident"
                                            value="01">
                                        <label class="form-check-label" for="Fatal Accident">
                                            Fatal Accident
                                        </label>
                                    </div>
                                    <div class="col-auto">
                                        <input class="form-check-input mt-0" type="radio" v-model="form1.forTransportVehicularAccident.ref_severity" 
                                            value="02" id="Serious">
                                        <label class="form-check-label" for="Serious">
                                            Serious Injury Accident
                                        </label>
                                    </div>

                                    <div class="col-auto">
                                        <input class="form-check-input mt-0" type="radio" v-model="form1.forTransportVehicularAccident.ref_severity"
                                            value="03" id="Minor">
                                        <label class="form-check-label" for="Minor">
                                            Minor Injury Accident
                                        </label>
                                    </div>

                                    <div class="col-auto">
                                        <input class="form-check-input mt-0" type="radio" v-model="form1.forTransportVehicularAccident.ref_severity"
                                            value="04" id="Property">
                                        <label class="form-check-label" for="Property">
                                            Property Damage Only
                                        </label>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-auto border-end border-secondary">
                                        <!--33a.2-->
                                        <div class="col-auto">
                                            <h6 class="form-check-label" for="flexCheckDefault">
                                                Vehicles Invloved:
                                            </h6>
                                        </div>

                                        <div class="row">
                                            <div class="col-auto float-left">
                                                <div class="row">
                                                    <div class="col-auto">
                                                        <h6 class="form-check-label" for="flexCheckDefault">
                                                            Patient's Vehicle
                                                        </h6>
                                                    </div>
                                                </div>

                                                <div class="row">
                                                    <div class="col-auto">
                                                        <h6 class="form-check-label" for="flexCheckDefault">

                                                        </h6>
                                                    </div>

                                                    <div class="col-auto">
                                                        <input class="form-check-input mt-0" type="radio" v-model="form1.forTransportVehicularAccident.vehicle_code"
                                                            id="Pedestrian" value="00">
                                                        <label class="form-check-label" for="Pedestrian">
                                                            None(Pedestrian)
                                                        </label>
                                                    </div>

                                                    <div class="col-auto">
                                                        <input class="form-check-input mt-0" type="radio" v-model="form1.forTransportVehicularAccident.vehicle_code"
                                                            id="Car" value="10">
                                                        <label class="form-check-label" for="Car">
                                                            Car
                                                        </label>
                                                    </div>

                                                    <div class="col-auto">
                                                        <input class="form-check-input mt-0" type="radio" v-model="form1.forTransportVehicularAccident.vehicle_code"
                                                            id="Van" value="73">
                                                        <label class="form-check-label" for="Van">
                                                            Van
                                                        </label>
                                                    </div>
                                                </div>

                                                <div class="row row-lg-8">
                                                    <div class="col-auto">
                                                        <h6 class="form-check-label" for="flexCheckDefault">

                                                        </h6>
                                                    </div>

                                                    <div class="col-auto">
                                                        <input class="form-check-input mt-0" type="radio" v-model="form1.forTransportVehicularAccident.vehicle_code"
                                                            id="Bus" value="30">
                                                        <label class="form-check-label" for="Bus">
                                                            Bus
                                                        </label>
                                                    </div>

                                                    <div class="col-auto">
                                                        <input class="form-check-input mt-0" type="radio" v-model="form1.forTransportVehicularAccident.vehicle_code"
                                                            id="Motorcycle" value="40">
                                                        <label class="form-check-label" for="Motorcycle">
                                                            Motorcycle
                                                        </label>
                                                    </div>

                                                    <div class="col-auto">
                                                        <input class="form-check-input mt-0" type="radio" v-model="form1.forTransportVehicularAccident.vehicle_code"
                                                            id="Bicycle" value="50">
                                                        <label class="form-check-label" for="Bicycle">
                                                            Bicycle
                                                        </label>
                                                    </div>

                                                    <div class="col-auto">
                                                        <input class="form-check-input mt-0" type="radio" v-model="form1.forTransportVehicularAccident.vehicle_code"
                                                            id="Tricycle" value="60">
                                                        <label class="form-check-label" for="Tricycle">
                                                            Tricycle
                                                        </label>
                                                    </div>
                                                </div>

                                                <div class="row row-lg-8">
                                                    <div class="col-auto">
                                                        <h6 class="form-check-label" for="flexCheckDefault">

                                                        </h6>
                                                    </div>

                                                    <div class="col-auto">
                                                        <input class="form-check-input mt-0" type="radio" v-model="form1.forTransportVehicularAccident.vehicle_code"
                                                            id="Others6" value="88">
                                                        <label class="form-check-label" for="Others6" name="others6">
                                                            Others,
                                                        </label>
                                                        <input type="text" class="inputlabelunderline" :disabled="form1.forTransportVehicularAccident.vehicle_code!='88'"
                                                             v-model="form1.forTransportVehicularAccident.pat_veh_sp">
                                                    </div>

                                                    <div class="col-auto">
                                                        <input class="form-check-input mt-0" type="radio" v-model="form1.forTransportVehicularAccident.vehicle_code"
                                                            id="Unknown" value="99">
                                                        <label class="form-check-label" for="Unknown">
                                                            Unknown
                                                        </label>
                                                    </div>

                                                </div>

                                            </div>
                                        </div>

                                        <div class="row">
                                            <div class="col-auto">
                                                <div class="row row-lg-8">
                                                    <div class="col-auto">
                                                        <h6 class="form-check-label" for="flexCheckDefault">
                                                            Other Vehicle/Object Involved(for COLLISION accident
                                                            ONLY)
                                                        </h6>
                                                    </div>
                                                </div>

                                                <div class="row">

                                                    <div class="col-auto">
                                                        <h6 class="form-check-label" for="flexCheckDefault">

                                                        </h6>
                                                    </div>

                                                    <div class="col-auto">
                                                        <input class="form-check-input mt-0" type="radio" v-model="form1.forTransportVehicularAccident.etc_veh"
                                                            id="Pedestrian1" value="00">
                                                        <label class="form-check-label" for="Pedestrian1">
                                                            None(Pedestrian)
                                                        </label>
                                                    </div>

                                                    <div class="col-auto">
                                                        <input class="form-check-input mt-0" type="radio" v-model="form1.forTransportVehicularAccident.etc_veh"
                                                            id="Car1" value="10">
                                                        <label class="form-check-label" for="Car1">
                                                            Car
                                                        </label>
                                                    </div>

                                                    <div class="col-auto">
                                                        <input class="form-check-input mt-0" type="radio" v-model="form1.forTransportVehicularAccident.etc_veh"
                                                            id="Van1" value="73">
                                                        <label class="form-check-label" for="Van1">
                                                            Van
                                                        </label>
                                                    </div>
                                                </div>

                                                <div class="row row-lg-8">
                                                    <div class="col-auto">
                                                        <h6 class="form-check-label" for="flexCheckDefault">

                                                        </h6>
                                                    </div>

                                                    <div class="col-auto">
                                                        <input class="form-check-input mt-0" type="radio" v-model="form1.forTransportVehicularAccident.etc_veh"
                                                            id="Bus1" value="30">
                                                        <label class="form-check-label" for="Bus1">
                                                            Bus
                                                        </label>
                                                    </div>

                                                    <div class="col-auto">
                                                        <input class="form-check-input mt-0" type="radio" v-model="form1.forTransportVehicularAccident.etc_veh"
                                                            id="Motorcycle1" value="40">
                                                        <label class="form-check-label" for="Motorcycle1">
                                                            Motorcycle
                                                        </label>
                                                    </div>

                                                    <div class="col-auto">
                                                        <input class="form-check-input mt-0" type="radio" v-model="form1.forTransportVehicularAccident.etc_veh"
                                                            id="Bicycle1" value="50">
                                                        <label class="form-check-label" for="Bicycle1">
                                                            Bicycle
                                                        </label>
                                                    </div>

                                                    <div class="col-auto">
                                                        <input class="form-check-input mt-0" type="radio" v-model="form1.forTransportVehicularAccident.etc_veh"
                                                            id="Tricycle1" value="60">
                                                        <label class="form-check-label" for="Tricycle1">
                                                            Tricycle
                                                        </label>
                                                    </div>
                                                </div>

                                                <div class="row row-lg-8">
                                                    <div class="col-auto">
                                                        <h6 class="form-check-label" for="flexCheckDefault">

                                                        </h6>
                                                    </div>

                                                    <div class="col-auto">
                                                        <input class="form-check-input mt-0" type="radio" v-model="form1.forTransportVehicularAccident.etc_veh"
                                                            id="Others7" value="88">
                                                        <label class="form-check-label" for="Others7">
                                                            Others,
                                                        </label>
                                                        <input type="text" class="inputlabelunderline" :disabled="form1.forTransportVehicularAccident.etc_veh!='88'"
                                                        v-model="form1.forTransportVehicularAccident.etc_veh_sp"
                                                         >
                                                    </div>

                                                    <div class="col-auto">
                                                        <input class="form-check-input mt-0" type="radio" v-model="form1.forTransportVehicularAccident.etc_veh"
                                                            id="Unknown1" value="99">
                                                        <label class="form-check-label" for="Unknown1">
                                                            Unknown
                                                        </label>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <!--33a.2 end-->

                                    <!--33a.3-->
                                    <div class="col border-end border-secondary">
                                        <div class="col-auto">
                                            <h6 class="form-check-label" for="flexCheckDefault">
                                                Position of Patient
                                            </h6>
                                        </div>
                                        <div class="row">
                                            <div class="col">
                                                <div class="col-auto">
                                                    <input class="form-check-input mt-0" type="radio" v-model="form1.forTransportVehicularAccident.position_code"
                                                        id="Pedestrian2" value="10">
                                                    <label class="form-check-label" for="Pedestrian2">
                                                        Pedestrian
                                                    </label>
                                                </div>

                                                <div class="col-auto">
                                                    <input class="form-check-input mt-0" type="radio" v-model="form1.forTransportVehicularAccident.position_code"
                                                        id="Driver" value="20">
                                                    <label class="form-check-label" for="Driver">
                                                        Driver
                                                    </label>
                                                </div>

                                                <div class="col-auto">
                                                    <input class="form-check-input mt-0" type="radio" v-model="form1.forTransportVehicularAccident.position_code"
                                                        id="Captain" value="50">
                                                    <label class="form-check-label" for="Captain">
                                                        Captain
                                                    </label>
                                                </div>

                                                <div class="col-auto">
                                                    <input class="form-check-input mt-0" type="radio" v-model="form1.forTransportVehicularAccident.position_code"
                                                        id="Pilot" value="40">
                                                    <label class="form-check-label" for="Pilot">
                                                        Pilot
                                                    </label>
                                                </div>

                                                <div class="col-auto">
                                                    <input class="form-check-input mt-0" type="radio" v-model="form1.forTransportVehicularAccident.position_code"
                                                        id="Front" value="30">
                                                    <label class="form-check-label" for="Front">
                                                        Front Passenger
                                                    </label>
                                                </div>

                                                <div class="col-auto">
                                                    <input class="form-check-input mt-0" type="radio" v-model="form1.forTransportVehicularAccident.position_code" id="Rear"
                                                    value="35">
                                                    <label class="form-check-label" for="Rear">
                                                        Rear Passenger
                                                    </label>
                                                </div>

                                                <div class="col-auto">
                                                    <input class="form-check-input mt-0" type="radio" v-model="form1.forTransportVehicularAccident.position_code"
                                                        id="Others8" value="88">
                                                    <label class="form-check-label" for="Others8">
                                                        Others,
                                                    </label>
                                                    <input type="text" :disabled="form1.forTransportVehicularAccident.position_code!='88'" class="inputlabelunderline2" v-model="form1.forTransportVehicularAccident.pos_pat_sp"
                                                     >
                                                </div>

                                                <div class="col-auto">
                                                    <input class="form-check-input mt-0" type="radio" v-model="form1.forTransportVehicularAccident.position_code"
                                                        id="Unknown2" value="99">
                                                    <label class="form-check-label" for="Unknown2">
                                                        Unknown
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!--33a.3 end-->

                                    <!--33a.4-->
                                    <div class="col border-bottom border-secondary" id="colViIn">
                                        <div class="row">
                                            <div class="col-auto">
                                                <h6 class="form-check-label" for="flexCheckDefault">
                                                    Victims Involved
                                                </h6>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-auto">
                                                <input class="form-check-input mt-0" type="radio" v-model="form1.forTransportVehicularAccident.ref_victim"
                                                    id="Alone" value="01">
                                                <label class="form-check-label" for="Alone">
                                                    Alone
                                                </label>
                                            </div>
                                            <div class="col">
                                                <div class="row">
                                                    <div class="col-auto">
                                                        <input class="form-check-input mt-0" type="radio" v-model="form1.forTransportVehicularAccident.ref_victim"
                                                            id="Withothers" value="02">
                                                        <label class="" for="Withothers">
                                                            With others, specify how many(excuding the victim)
                                                        </label>
                                                        <input type="text" :disabled="form1.forTransportVehicularAccident.ref_victim!='02'" class="inputlabelunderline2"
                                                            v-model="form1.forTransportVehicularAccident.ref_victom_withother" >
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <!--33a.4 end-->
                                </div>
                                <div class="row">
                                    <div class="col-auto border border-secondary border-left-0 border-right-0">
                                        <!--33b-->
                                        <div class="col-auto">
                                            <h6 class="form-check-label" for="flexCheckDefault">
                                                Place of Occurrence:
                                            </h6>
                                        </div>
                                        <div class="row">
                                            <div class="col">
                                                <div class="col-auto">
                                                    <input class="form-check-input mt-0" type="radio" v-model="form1.forTransportVehicularAccident.place_occ_code"
                                                        id="Home" value="10">
                                                    <label class="form-check-label" for="Home">
                                                        Home
                                                    </label>
                                                </div>

                                                <div class="col-auto">
                                                    <input class="form-check-input mt-0" type="radio" v-model="form1.forTransportVehicularAccident.place_occ_code"
                                                        id="School" value="30">
                                                    <label class="form-check-label" for="School">
                                                        School
                                                    </label>
                                                </div>

                                                <div class="col-auto">
                                                    <input class="form-check-input mt-0" type="radio" v-model="form1.forTransportVehicularAccident.place_occ_code"
                                                        id="Road" value="50">
                                                    <label class="form-check-label" for="Road">
                                                        Road
                                                    </label>
                                                </div>

                                                <div class="col-auto">
                                                    <input class="form-check-input mt-0" type="radio" v-model="form1.forTransportVehicularAccident.place_occ_code"
                                                        id="Bars" value="60">
                                                    <label class="form-check-label" for="Bars">
                                                        Videoke Bars
                                                    </label>
                                                </div>

                                                <div class="col-auto">
                                                    <input class="form-check-input mt-0" type="radio" v-model="form1.forTransportVehicularAccident.place_occ_code"
                                                        id="Workplace" value="70">
                                                    <label class="form-check-label" for="Workplace">
                                                        Workplace, specify
                                                    </label>
                                                    <input type="text" :disabled="form1.forTransportVehicularAccident.place_occ_code!='70'" class="inputlabelunderline2"
                                                        v-model="form1.forTransportVehicularAccident.poc_wp_spec" >
                                                </div>

                                                <div class="col-auto">
                                                    <input class="form-check-input mt-0" type="radio" v-model="form1.forTransportVehicularAccident.place_occ_code"
                                                        id="Others9" value="88">
                                                    <label class="form-check-label" for="Others9">
                                                        Others, specify
                                                    </label>
                                                    <input type="text" :disabled="form1.forTransportVehicularAccident.place_occ_code!='88'" class="inputlabelunderline2" v-model="form1.forTransportVehicularAccident.poc_etc_spec"
                                                     >
                                                </div>

                                                <div class="col-auto">
                                                    <input class="form-check-input mt-0" type="radio" checked v-model="form1.forTransportVehicularAccident.place_occ_code"
                                                        id="Unkown4" value="99">
                                                    <label class="form-check-label" for="Unkown4">
                                                        Unknown
                                                    </label>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-auto border border-secondary">
                                        <!--33c-->
                                        <div class="col-auto">
                                            <h6 class="form-check-label" for="flexCheckDefault">
                                                Activity of the Patient at the <br> time of the incident:
                                            </h6>
                                        </div>
                                        <div class="row">
                                            <div class="col">
                                                <div class="col-auto">
                                                    <input class="form-check-input mt-0" type="radio" v-model="form1.forTransportVehicularAccident.activity_code"
                                                        id="Sports" value="10">
                                                    <label class="form-check-label" for="Sports">
                                                        Sports
                                                    </label>
                                                </div>

                                                <div class="col-auto">
                                                    <input class="form-check-input mt-0" type="radio" v-model="form1.forTransportVehicularAccident.activity_code"
                                                        id="Leisure" value="20">
                                                    <label class="form-check-label" for="Leisure">
                                                        Leisure
                                                    </label>
                                                </div>

                                                <div class="col-auto">
                                                    <input class="form-check-input mt-0" type="radio" v-model="form1.forTransportVehicularAccident.activity_code"
                                                        id="Workrelated" value="30">
                                                    <label class="form-check-label" for="Workrelated">
                                                        Work related
                                                    </label>
                                                </div>

                                                <div class="col-auto">
                                                    <input class="form-check-input mt-0" type="radio" v-model="form1.forTransportVehicularAccident.activity_code"
                                                        id="Others10" value="88">
                                                    <label class="form-check-label" for="Others10">
                                                        Others, specify
                                                    </label>
                                                    <input type="text" :disabled="form1.forTransportVehicularAccident.activity_code!='88'" class="inputlabelunderline2" v-model="form1.forTransportVehicularAccident.act_etc_spec"
                                                    >
                                                </div>

                                                <div class="col-auto">
                                                    <input class="form-check-input mt-0" type="radio" checked
                                                        v-model="form1.forTransportVehicularAccident.activity_code" id="Unkown5" value="99">
                                                    <label class="form-check-label" for="Unkown5">
                                                        Unknown
                                                    </label>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!--33c-->

                                    <div class="col border border-secondary">
                                        <!--33d-->
                                        <div class="col">
                                            <h6 class="form-check-label" for="flexCheckDefault">
                                                Other risk factor at the time of the incident:
                                            </h6>
                                        </div>
                                        <div class="row">
                                            <div class="col">
                                                <div class="col-auto">
                                                    
                                                    <input class="form-check-input mt-0" type="checkbox" v-model="form1.forTransportVehicularAccident.risk_alcliq"
                                                        id="Alchohol" :true-value="'Y'" :false-value="'N'">
                                                    <label class="form-check-label" for="Alchohol">
                                                        Alchohol/liquor
                                                    </label>
                                                </div>

                                                <div class="col-auto">
                                                    
                                                    <input class="form-check-input mt-0" type="checkbox" v-model="form1.forTransportVehicularAccident.risk_smoke"
                                                        id="Smoking" :true-value="'Y'" :false-value="'N'">
                                                    <label class="form-check-label" for="Smoking">
                                                        Smoking
                                                    </label>
                                                </div>

                                                <div class="col-auto">
                                                    
                                                    <input class="form-check-input mt-0" type="checkbox" v-model="form1.forTransportVehicularAccident.risk_drugs"
                                                        id="Drugs" value="Y">
                                                    <label class="form-check-label" for="Drugs">
                                                        Drugs
                                                    </label>
                                                </div>

                                                <div class="col-auto">
                                                   
                                                    <input class="form-check-input mt-0" type="checkbox" v-model="form1.forTransportVehicularAccident.risk_mobpho"
                                                        id="phone" :true-value="'Y'" :false-value="'N'">
                                                    <label class="form-check-label" for="phone">
                                                        Using mobile phone
                                                    </label>
                                                </div>

                                                <div class="col-auto">
                                                    
                                                    <input class="form-check-input mt-0" type="checkbox" v-model="form1.forTransportVehicularAccident.risk_sleep"
                                                        id="Sleepy" :true-value="'Y'" :false-value="'N'">
                                                    <label class="form-check-label" for="Sleepy">
                                                        Sleepy
                                                    </label>
                                                </div>

                                                <div class="col-auto">
                                                    
                                                    <input class="form-check-input mt-0" type="checkbox" v-model="form1.forTransportVehicularAccident.risk_other"
                                                        id="Others11" :true-value="'Y'" :false-value="'N'">
                                                    <label class="form-check-label" for="Others11">
                                                        Others, specify
                                                    </label>
                                                    <input type="text" :disabled="form1.forTransportVehicularAccident.risk_other=='N'" class="inputlabelunderline2" v-model="form1.forTransportVehicularAccident.risk_etc_spec"
                                                     >
                                                    <label class="form-check-label" for="Others11">
                                                        (e.g. suspected unter the influence of substance
                                                        used)
                                                    </label>
                                                </div>

                                                <div class="col-auto">
                                                    
                                                    <input class="form-check-input mt-0" type="checkbox" v-model="form1.forTransportVehicularAccident.risk_none"
                                                        id="risk_none" :true-value="'Y'" :false-value="'N'">
                                                    <label class="form-check-label" for="risk_none">
                                                        None
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!--33d-->
                                </div>

                                <div class="row border-bottom border-secondary">
                                    <!--33e-->
                                    <div class="col-auto">
                                        <h6 class="form-check-label" for="flexCheckDefault">
                                            Safety:(check all that apply)
                                        </h6>
                                    </div>

                                    <div class="col-auto">
                                        
                                        <input class="form-check-input mt-0" type="checkbox" v-model="form1.forTransportVehicularAccident.safe_none" id="noneCh"
                                        :true-value="'Y'" :false-value="'N'">
                                        <label class="form-check-label" for="noneCh">
                                            None
                                        </label>
                                        <div class="d-inline p-1">
                                            <input class="form-check-input mt-0" type="checkbox" v-model="form1.forTransportVehicularAccident.safe_airbag" id="airbagCh"
                                                :true-value="'Y'" :false-value="'N'">
                                            <label class="form-check-label" for="airbagCh">
                                                Airbag
                                            </label>
                                        </div>
                                        <div class="d-inline">
                                            <input class="form-check-input mt-0" type="checkbox" v-model="form1.forTransportVehicularAccident.safe_helmet" id="helmetCh"
                                            :true-value="'Y'" :false-value="'N'">
                                            <label class="form-check-label" for="helmetCh">
                                                Helmet
                                            </label>
                                        </div>
                                        <div class="d-inline p-1">
                                            <input class="form-check-input mt-0" type="checkbox" v-model="form1.forTransportVehicularAccident.safe_cseat"
                                                id="childseatCh" :true-value="'Y'" :false-value="'N'">
                                            <label class="form-check-label" for="childseatCh">
                                                Childseat
                                            </label>
                                        </div>
                                        <div class="d-inline p-1">
                                            <input class="form-check-input mt-0" type="checkbox" v-model="form1.forTransportVehicularAccident.safe_sbelt"
                                                id="seatbeltCh" :true-value="'Y'" :false-value="'N'">
                                            <label class="form-check-label" for="seatbeltCh">
                                                Seatbelt
                                            </label>
                                        </div>
                                        <div class="d-inline p-1">
                                            <input class="form-check-input mt-0" type="checkbox" v-model="form1.forTransportVehicularAccident.safe_unkn"
                                                id="unknown5Ch" :true-value="'Y'" :false-value="'N'">
                                            <label class="form-check-label" for="unknown5Ch">
                                                Unknown
                                            </label>
                                        </div>
                                        <div class="d-inline p-1">
                                            <input class="form-check-input mt-0" type="checkbox" v-model="form1.forTransportVehicularAccident.safe_vest" id="vestCh"
                                            :true-value="'Y'" :false-value="'N'">
                                            <label class="form-check-label" for="vestCh">
                                                Life vest/LifeJacket/Floatation device 
                                            </label>
                                        </div>
                                        <div class="d-inline p-1">
                                            <input class="form-check-input mt-0" type="checkbox" v-model="form1.forTransportVehicularAccident.safe_other"
                                                id="others12Ch" :true-value="'Y'" :false-value="'N'">
                                            <label class="form-check-label" for="others12Ch" name="others12">
                                                Others
                                            </label>
                                            <input type="text" class="inputlabelunderline" v-model="form1.forTransportVehicularAccident.safe_other_sp"
                                                id="safety_others" >
                                        </div>
                                    </div>



                                    <!--33e end-->

                                    <!--TRANSPORT/VEHICULAR PART-->
                                </div>

                            </div>
                        </div>
                    </div>
                    <!--collapsible button-->

                    <!-- <hr> -->

                    <div class="form-group border border-secondary divpat1">
                        <div class="p-2 bg-success text-white">
                            <div class="row">
                                <div class="col">HOSPITAL/FACILITY DATA:</div>
                            </div>
                            <div class="row">
                                <div class="col">A.
                                    <select id="patType" v-model="form1.hospitalFacilityData.ptype_code" class="form-select-sm bg-success text-light"
                                        aria-label=".form-select-sm example" style="border: none; border-bottom: 1px solid black">
                                        <option></option>
                                        <option value="e" id="pattype" name="pattype">ER</option>
                                        <option value="n">OPD</option>
                                        <option value="i">In Patient(Injury Sustained During Confinment)
                                        </option>
                                        <option value="bh">BHS</option>
                                        <option value="rh">RHU</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="row-auto border border-secondary border-left-0 border-right-0">
                            <div class="row">
                                <div class="col-auto">
                                    Transferred from another hospital/facility
                                </div>
                                <div class="col-auto">
                                    <input class="form-check-input mt-0" type="radio" v-model="form1.hospitalFacilityData.trans_ref" value="Y"
                                        id="transferRdoyes">
                                    <label class="form-check-label" for="transferRdoyes">
                                        Yes 
                                    </label>
                                </div>
                                <div class="col col-lg-1">
                                    <input class="form-check-input mt-0" type="radio" v-model="form1.hospitalFacilityData.trans_ref" value="N"
                                        id="transferRdono">
                                    <label class="form-check-label" for="transferRdono">
                                        No
                                    </label>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-auto">
                                    Referred by another Hospital/Facility for Laboratory and/or other medical
                                    procedures
                                </div>
                                <div class="col-auto">
                                    
                                    <input class="form-check-input mt-0" type="radio" v-model="form1.hospitalFacilityData.trans_ref2" value="Y"
                                        id="referralyes">
                                    <label class="form-check-label" for="referralyes">
                                        Yes
                                    </label>
                                </div>
                                <div class="col col-lg-1">
                                    <input class="form-check-input mt-0" type="radio" v-model="form1.hospitalFacilityData.trans_ref2" value="N"
                                        id="referralno">
                                    <label class="form-check-label" for="referralno">
                                        No
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div class="row-auto">
                            <div class="row">
                                <div class="col-auto">
                                    <label class="form-check-label" for="flexCheckDefault">
                                        Name of Originating Hospital:
                                    </label>

                                    <select id="disp_inpat_oth" v-model="form1.hospitalFacilityData.ref_hosp_code" class="form-select-sm" style="border: none; border-bottom: 1px solid black"
                                        aria-label=".form-select-sm example">
                                        <option></option>
                                        <option value="4003">Notre Dame de Chartres
                                            Hospital</option>
                                        <option value="6689">
                                            Saint
                                            Louis University Hospital of the Sacred Heart</option>
                                        <option value="3285">Baguio Medical Center</option>
                                        <option value="1932">Roseville Rehabilitation Complex Company
                                        </option>
                                        <option value="3285">baguio Medical Center</option>
                                        <option value="2113">Pines City Doctor's Hospital</option>
                                    </select>

                                    Others:
                                    <input type="text" class="inputlabelunderline" 
                                        v-model="form1.hospitalFacilityData.ref_hosp_code_sp">
                                </div>
                            </div>
                        </div>

                        <div class="row-auto">
                            <div class="row">
                                <div class="col-auto">
                                    <label class="form-check-label" for="flexCheckDefault">
                                        Name of Originating Physician:
                                    </label>
                                    <input type="text" class="inputlabelunderline" 
                                        v-model="form1.hospitalFacilityData.ref_physician">
                                </div>
                            </div>
                        </div>

                        <div class="row-auto border border-secondary border-left-0 border-right-0">
                            <div class="row ">
                                <div class="col-auto pt-2">
                                    <label class="form-check-label" for="status">
                                        Status upon reaching Facility/Hospital:
                                    </label>
                                </div>
                                <div class="col-auto">
                                    <div class="">
                                        <select id="status_code" v-model="form1.hospitalFacilityData.status_code" class="form-select" style="border: none; border-bottom: 1px solid black"
                                            aria-label=".form-select-sm example">
                                            <option value="01">Dead on arrival</option>
                                            <option value="02">Alive: Conscious</option>
                                            <option value="03">Alive: Unconscious</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-auto">
                                    <label class="form-check-label">
                                        Mode of transport to the Hospital/Facility:
                                    </label>
                                </div>

                                <div class="col-auto">
                                    <input class="form-check-input mt-0" type="radio" value="01" v-model="form1.hospitalFacilityData.mode_transport_code"
                                        id="ambulance">
                                    <label class="form-check-label" for="ambulance">
                                        Ambulance
                                    </label>
                                </div>
                                <div class="col-auto">
                                    <input class="form-check-input mt-0" type="radio" value="02" v-model="form1.hospitalFacilityData.mode_transport_code"
                                        id="police">
                                    <label class="form-check-label" for="police">
                                        Police vehicle
                                    </label>
                                </div>
                                <div class="col-auto">
                                    <input class="form-check-input mt-0" type="radio" value="03" v-model="form1.hospitalFacilityData.mode_transport_code"
                                        id="private">
                                    <label class="form-check-label" for="private">
                                        Private vehicle
                                    </label>
                                </div>
                                <div class="col-auto">
                                    <input class="form-check-input mt-0" type="radio" value="04" v-model="form1.hospitalFacilityData.mode_transport_code"
                                        id="others13">
                                    <label class="form-check-label" for="others13">
                                        Others, specify
                                    </label>
                                    <input type="text" class="inputlabelunderline" v-model="form1.hospitalFacilityData.stat_reachdtl"
                                        >
                                </div>
                            </div>
                        </div>
                        <div class="row-auto border-bottom border-secondary">
                            <div class="row">
                                <div class="col-auto">
                                    <label class="form-check-label">
                                        Initial Impression:
                                    </label>
                                    <input type="text" class="inputlabelunderline" v-model="form1.hospitalFacilityData.diagnosis"
                                        >
                                </div>
                            </div>
                        </div>
                        <div class="row-auto">
                            <div class="row">
                                <div class="col-auto">
                                    <label class="form-check-label my-1">
                                        ICD-10 Code/s: Nature of Injury:
                                    </label>
                                    <input type="text" class="inputlabelunderline" v-model="form1.hospitalFacilityData.icd_10_nature_er"
                                        >
                                </div>
                                <div class="col-auto">
                                    <label class="form-check-label my-1">
                                        ICD-10 Code/s: External cause of Injury:
                                    </label>
                                    <input type="text" class="inputlabelunderline" v-model="form1.hospitalFacilityData.icd_10_external_er"
                                        >
                                </div>
                            </div>
                        </div>
                        <div class="row-auto border border-secondary border-right-0 border-left-0">
                            <div class="row">
                                <div class="col-auto">
                                    <label class="form-check-label">
                                        Treatment Given:
                                    </label>
                                </div>
                                <div class="col-auto">
                                    <label class="form-check-label">
                                    </label>
                                    <input type="text" class="inputlabelunderlinelong" v-model="form1.hospitalFacilityData.treatmentGiven"
                                        >
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <div class="row">
                                    <div class="container">
                                        <div class="row">
                                            <div class="col">
                                                <label class="form-check-label" for="disposition">
                                                    Disposition:
                                                </label>
                                            </div>
                                            <div class="row">
                                                <div class="col-auto">
                                                    <label class="form-check-label" for="unknown5Ch">

                                                    </label>
                                                </div>
                                                <div class="col-auto px-md-5">
                                                    <input class="form-check-input mt-0" type="radio" value="ADMIT"
                                                        v-model="form1.hospitalFacilityData.disposition_code" id="admitted">
                                                    <label class="form-check-label" for="admitted">
                                                        Admitted
                                                    </label>
                                                </div>
                                                <div class="col-auto px-md-5">
                                                    <input class="form-check-input mt-0" type="radio" value="TRASH"
                                                        v-model="form1.hospitalFacilityData.disposition_code" id="senthome">
                                                    <label class="form-check-label" for="senthome">
                                                        Treated and Sent Home
                                                    </label>
                                                </div>
                                                <div class="col-auto">
                                                    <input class="form-check-input mt-0" type="radio" value="REFER"
                                                        v-model="form1.hospitalFacilityData.disposition_code" id="transfer">
                                                    <label class="form-check-label" for="transfer">
                                                        Transferred to another facility/hospital, specify
                                                    </label>
                                                    <input type="text" class="inputlabelunderline" v-model="form1.hospitalFacilityData.disp_er_sp" 
                                                     >
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-auto">
                                                    <label class="form-check-label" for="unknown5Ch">

                                                    </label>
                                                </div>
                                                <div class="col-auto px-md-5">
                                                    <input class="form-check-input mt-0" type="radio" value="HAMAA"
                                                        v-model="form1.hospitalFacilityData.disposition_code" id="HAMA">
                                                    <label class="form-check-label" for="HAMA">
                                                        HAMA
                                                    </label>
                                                </div>
                                                <div class="col-auto px-md-5">
                                                    <input class="form-check-input mt-0" type="radio" value="ABSCN"
                                                        v-model="form1.hospitalFacilityData.disposition_code" id="absconded">
                                                    <label class="form-check-label" for="absconded">
                                                        Absconded
                                                    </label>
                                                </div>
                                                <div class="col-auto">
                                                    <input class="form-check-input mt-0" type="radio" value="88"
                                                        v-model="form1.hospitalFacilityData.disposition_code" id="other">
                                                    <label class="form-check-label" for="other">
                                                        Others:
                                                    </label>
                                                    <input type="text" class="inputlabelunderline" v-model="form1.hospitalFacilityData.disp_er_sp_oth"
                                                     >
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col border-top border-secondary">
                                    <div class="row ">
                                        <div class="col-auto ">
                                            <label class="form-check-label" for="outcome">
                                                Outcome:
                                            </label>
                                        </div>
                                        <div class="col-auto">
                                            <input class="form-check-input mt-0" type="radio" value="10"
                                                v-model="form1.hospitalFacilityData.outcome_code" id="improved">
                                            <label class="form-check-label" for="improved">
                                                Improved
                                            </label>
                                        </div>
                                        <div class="col-auto">
                                            <input class="form-check-input mt-0" type="radio" value="20"
                                            v-model="form1.hospitalFacilityData.outcome_code" id="unimproved">
                                            <label class="form-check-label" for="unimproved">
                                                Unimproved
                                            </label>
                                        </div>
                                        <div class="col-auto">
                                            <input class="form-check-input mt-0" type="radio" value="30"
                                            v-model="form1.hospitalFacilityData.outcome_code" id="died">
                                            <label class="form-check-label" for="died">
                                                Died
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- IN-PATIENT (for admitted hospital cases only) -->
                    <div class="form-group border border-secondary" style="line-height:1;">

                        <div class="p-2 bg-success text-white">
                            <div class="row">
                                <div class="col">B. IN-PATIENT (for admitted hospital cases only)</div>
                                <div class="w-100 d-none d-md-block"></div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <div class="row">
                                    <div class="col">
                                        <div class="row">
                                            <div class="col-auto">
                                                Complete Final Diagnosis:
                                            </div>
                                            <div class="col">
                                                <input type="text" class="inputlabelunderlinelong" v-model="form1.inPatient.complete_diagnosis"
                                                    >
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col">
                                        <div class="row">
                                            <div class="col">
                                                <div class="row">
                                                    <div class="col-auto">
                                                        Disposition
                                                    </div>
                                                    <div class="col-auto">
                                                        <div class="d-inline p-1">
                                                            <input class="form-check-input mt-0" type="radio" v-model="form1.inPatient.disp_inpat" id="inDischarged"
                                                                value="DISCH">
                                                            <label class="form-check-label" for="inDischarged">
                                                                Discharged
                                                            </label>
                                                        </div>
                                                    
                                                        <div class="d-inline">
                                                            <input class="form-check-input mt-0" type="radio" v-model="form1.inPatient.disp_inpat" id="inHama"
                                                            value="HAMA">
                                                            <label class="form-check-label" for="inHama">
                                                                HAMA
                                                            </label>
                                                        </div>
                                                    
                                                        <div class="d-inline p-1">
                                                            <input class="form-check-input mt-0" type="radio" v-model="form1.inPatient.disp_inpat" id="inAbson"
                                                                value="ABSCN">
                                                            <label class="form-check-label" for="inAbson">
                                                                Absonconded
                                                            </label>
                                                        </div>
                                                    
                                                        <div class="d-inline p-1">
                                                            <input class="form-check-input mt-0" type="radio" v-model="form1.inPatient.disp_inpat" id="inOthers"
                                                                value="oth">
                                                            <label class="form-check-label" for="inOthers">
                                                                Others, specify:
                                                            </label>
                                                            <input type="text" class="inputlabelunderline" v-model="form1.inPatient.disp_inpat_sp2"
                                                            >
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col">
                                                        <div class="d-inline p-1">
                                                            <input class="form-check-input" type="radio" v-model="form1.inPatient.disp_inpat" id="inTransfer"
                                                                value="admTransferred">
                                                            <label class="form-check-label" for="inTransfer">
                                                                Transferred to another facility/hopital, specify:
                                                            </label>
                                                            <select id="disp_inpat_oth" v-model="form1.inPatient.disp_inpat_oth" class="form-select-sm" style="border: none; border-bottom: 1px solid black"
                                                                aria-label=".form-select-sm example">
                                                                <option></option>
                                                                <option value="4003">Notre Dame de Chartres
                                                                    Hospital</option>
                                                                <option value="6689">
                                                                    Saint
                                                                    Louis University Hospital of the Sacred Heart</option>
                                                                <option value="3285">Baguio Medical Center</option>
                                                                <option value="1932">Roseville Rehabilitation Complex Company
                                                                </option>
                                                                <option value="3285">baguio Medical Center</option>
                                                                <option value="2113">Pines City Doctor's Hospital</option>
                                                            </select>
                                                            Others: 
                                                            <input type="text" class="inputlabelunderline" v-model="form1.inPatient.inPatTransfer"
                                                                >
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col">
                                        <div class="row ">
                                            <div class="col-auto ">
                                                Outcome:
                                            </div>
        
                                            <div class="col-auto">
                                                <div class="d-inline p-1">
                                                    <input class="form-check-input mt-0" type="radio" v-model="form1.inPatient.outcome_inpat" id="inImprov"
                                                        value="10">
                                                    <label class="form-check-label" for="inImprov">
                                                        Improved
                                                    </label>
                                                </div>
                                            
            
                                                <div class="d-inline">
                                                    <input class="form-check-input mt-0" type="radio" v-model="form1.inPatient.outcome_inpat" id="inUnimprov"
                                                        value="20">
                                                    <label class="form-check-label" for="inUnimprov">
                                                        Unimproved
                                                    </label>
                                                </div>
                                    
                                                <div class="d-inline p-1">
                                                    <input class="form-check-input mt-0" type="radio" v-model="form1.inPatient.outcome_inpat" id="inDied"
                                                        value="30">
                                                    <label class="form-check-label" for="inDied">
                                                        Died
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col">
                                        <div class="row">
                                            <div class="col-auto">
                                                ICD-10 Code/s: Nature of Injury:
                                                <input type="text" class="inputlabelunderline2" v-model="form1.inPatient.icd10_nature_inpatient">
                                            </div>
                                            <div class="col">
                                                ICD-10 Code/s: External cause of Injury:
                                                <input type="text" class="inputlabelunderline2" v-model="form1.inPatient.icd_10_ext_inpatient"
                                                        >
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col">
                                        <div class="row">
                                            <div class="col-auto">
                                                Comments:
            
                                            </div>
                                            <div class="col">
                                                <input type="text" class="inputlabelunderlinelong" v-model="form1.inPatient.comments"
                                                    >
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col">
                                <div class="row p-2">
                                    <div class="col-auto">
                                        <div class="row">
                                            <div class="col-auto">
                                                Consultant in-charge
                                                <input type="text" class="inputlabelunderline me-2"
                                                    v-model="form1.inPatient.consultant_name"
                                                    id="consultant_in_charge_last_name" >
    
                                                <input type="text" class="inputlabelunderline"
                                                    v-model="form1.inPatient.consultant_mobile"
                                                    id="consultant_in_charge_last_name" >
                                            </div>
                                        </div>
                                    </div>
                                    <!-- <div class="col border border-secondary p-2 mt-2">
                                        <input type="text" class="inputlabelunderline2" name="consultant_landline"
                                            id="consultant_landline" >
                                        <input type="text" class="inputlabelunderline2" name="consultant_mobile"
                                            id="consultant_mobile" >
                                        <input type="text" class="inputlabelunderline" name="consultant_email"
                                            id="consultant_email" >
                                    </div> -->
                                </div>
                                <div class="row p-2">
                                    <div class="col-auto">
                                        <div class="row">
                                            <div class="col-auto">
                                                Address
                                                <input type="text" class="inputlabelunderlinelong me-2"
                                                    v-model="form1.inPatient.consultant_address"
                                                    id="consultant_in_charge_address" >
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                                </div>
                                <div class="row">
                                     <!-- <div class="col">
                                <div class="row">
                                    <div class="col-auto">
                                        <div class="row">
                                            <div class="col-auto">
                                                <h6 class="form-check-label" for="flexCheckDefault">
                                                    Address
                                                </h6>
                                                <input type="text" class="inputlabelunderline2"
                                                    name="consultant_street_name" id="consultant_street_name"
                                                    >
                                                <input type="text" class="inputlabelunderline2" name="consultant_region"
                                                    id="consultant_region" >
                                                <input type="text" class="inputlabelunderline2" name="consultant_province"
                                                    id="consultant_province" >
                                                <input type="text" class="inputlabelunderline2" name="consultant_city"
                                                    id="consultant_city" >
                                                <input type="text" class="inputlabelunderline2" name="consultant_barangay"
                                                    id="consultant_barangay" >
                                                <input type="text" class="inputlabelunderline2" name="consultant_zipcode"
                                                    id="consultant_zipcode" >
                                            </div>
                                        </div>
                                    </div>
    
                                </div>
                            </div>
                            <div class="col">
                                <div class="row">
                                    <div class="col-auto border-top border-bottom border-secondary">
                                        <div class="row">
                                            <div class="col-auto">
                                                <div class="row">
                                                    <div class="col-auto">
                                                        <h6 class="form-check-label" for="flexCheckDefault">
                                                            Completed
                                                            By:</h6>
                                                    </div>
                                                    <div class="col-auto">
                                                        <input type="hidden" name="chsame" value="0">
                                                        <input type="checkbox" value="1" name="chsame" id="chsame">
                                                        <label for="chsame"><i>(Same as consultant)</i></label>
                                                    </div>
                                                    <div class="col">
    
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col">
                                                        <input type="text" class="inputlabelunderline2"
                                                            name="completedBy_last_name" id="completedBy_last_name"
                                                            >
                                                        <input type="text" class="inputlabelunderline2"
                                                            name="completedBy_first_name" id="completedBy_first_name"
                                                         >
                                                        <input type="text" class="inputlabelunderline2"
                                                            name="completedBy_middle_name" id="completedBy_middle_name"
                                                         >
                                                        <input type="text" class="inputlabelunderline2"
                                                            name="completedBy_department" id="completedBy_department"
                                                         >
                                                    </div>
                                                </div>
    
    
                                            </div>
    
                                        </div>
                                    </div>
                                    <div class="col border border-secondary p-2 mt-2">
                                        <input type="text" class="inputlabelunderline2" name="completedBy_landline"
                                            id="completedBy_landline" >
                                        <input type="text" class="inputlabelunderline2" name="completedBy_mobile"
                                            id="completedBy_mobile" >
                                        <input type="text" class="inputlabelunderline" name="completedBy_email"
                                            id="completedBy_email" >
                                    </div>
                                </div>
                            </div>
    
                            <div class="col">
                                <div class="row">
                                    <div class="col-auto">
                                        <div class="row">
                                            <div class="col-auto">
                                                <h6 class="form-check-label" for="flexCheckDefault">
                                                    Address
                                                </h6>
                                                <input type="text" class="inputlabelunderline2" name="completedBy_street"
                                                    id="completedBy_street" >
                                                <input type="text" class="inputlabelunderline2" name="completedBy_region"
                                                    id="completedBy_region" >
                                                <input type="text" class="inputlabelunderline2" name="completedBy_province"
                                                    id="completedBy_province" >
                                                <input type="text" class="inputlabelunderline2" name="completedBy_City"
                                                    id="completedBy_City" >
                                                <input type="text" class="inputlabelunderline2" name="completedBy_barangay"
                                                    id="completedBy_barangay" >
                                                <input type="text" class="inputlabelunderline2" name="completedBy_zip"
                                                    id="completedBy_zip" >
                                            </div>
                                        </div>
                                    </div>
    
                                </div>
                            </div> -->
    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        <div class="bg-dark bg-gradient d-print-none rounded-3 p-2 " style="position: fixed; bottom: 10px; right: 30px; ">
            <div class="">
                <div class="row ">
                    <div class="col d-flex justify-content-start d-print-none" >
                        <!-- <router-link to="/"> -->
                            <button class="btn btn-secondary btn" title="Patient lists" id="btnsticky" @click="backBtn">
                                <i class="fa fa-plus" aria-hidden="true">

                                </i><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    class="bi bi-arrow-left" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd"
                                        d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                                </svg>
                            </button>
                        <!-- </router-link> -->
                    </div>

                    <input type="hidden" id="account_name" name="account_name">
                    <input type="hidden" id="date_exported" name="date_exported">

                    <div class="col d-flex justify-content-end">
                        <!-- <button type="button" data-toggle="popover" title="popover title" data-content="Some message">popover</button>  -->
                        <button id="btnsticky" type="submit" title="Save Form" class="btn btn-primary d-print-none" @click="save">
                            <i class="fa fa-search"></i>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                fill="currentColor" class="bi bi-download" viewBox="0 0 16 16">
                                <path
                                    d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                                <path
                                    d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                            </svg>
                        </button>
                        <select id="status" v-model="form1.status" class="form-select-sm d-print-none"
                            aria-label=".form-select-sm example">
                            <option value="drafts">Drafts</option>
                            <option value="completeForm">Final Output</option>
                        </select>

                    </div>

                    <div class="col-auto d-flex justify-content-end d-print-none">
                        <button type="submit" title="Print" class="btn btn-warning " id="print" @click="print"><i
                                class="fa fa-search"></i>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="bi bi-printer" viewBox="0 0 16 16">
                                <path d="M2.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z" />
                                <path
                                    d="M5 1a2 2 0 0 0-2 2v2H2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1V3a2 2 0 0 0-2-2H5zM4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2H4V3zm1 5a2 2 0 0 0-2 2v1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v-1a2 2 0 0 0-2-2H5zm7 2v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1z" />
                            </svg> </button>
                    </div>

                </div>
            </div>
        </div>
    </div>

</template>
<script>
    // import {
    //     ref
    // } from 'vue'
    // const rdoAid = ref([])
    // const inj_intent_code = ref([])
    // const mult_inj = ref([])
    // const noi_abrasion = ref([])
    import axios from 'axios'
    import moment from 'moment'
    import { usedashboardTask } from '../store/dashBoardTask'
    import { usePatTask } from '../store/retrieveTask'
    export default {
        setup(){
        const dashboardTask = usedashboardTask()
        const patTask = usePatTask()
        return { dashboardTask, patTask }
        },
        data() {
            return {
                
                form1:{
                    enccode:this.$route.params.enccode,
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
                patHeader:[],
                patReg:[],
                regionCode:[],
                provinceCode:[],
                cityCode:[],
            }
        },
        async created(){
            this.patTask.enccode = this.form1.enccode
            this.patTask.header = await this.patTask.getPatHeader

            // console.log("task", this.patTask.enccode)
            // console.log("get retrieve", await this.patTask.getRetrieveInjuryDataJson)
            this.patTask.form1 = await this.patTask.getRetrieveInjuryDataJson
            // console.log("form1", JSON.parse(this.patTask.form1[0].result))
            this.form1 = JSON.parse(this.patTask.form1[0].result)
            console.log("form1 ",this.form1)
            // console.log("header ", await this.patTask.getPatHeader)
            // console.log("header patient", this.patTask.header[0].patfirst)
            // console.log("session: "+ localStorage.name)
            this.getRegionCode().then(res => {
                this.regionCode = res.data
            })
            this.getCityCode().then(res => {
                this.cityCode = res.data
                // console.log(this.regionCode)
            })

            
        },
        methods:{
            async getRetrieveInjuryDataJson(enccodeID,sectionName){
                const enccode = {
                   enccode1: enccodeID,
                   section: sectionName
                }
                
                // const response = await axios.post("http://192.168.7.66:8040/api/spInjuryGetDataPerTable",enccode)
                const response = await axios.post("http://192.168.7.66:8040/api/retrieveInjuryDataJSON",enccode)

                console.log("response async ",response.data[0])
                
                return response
            },
            async getAllPatientList() {
                const response = await axios.get("http://192.168.7.66:8040/api/injuryList");
                return response;
            },
            convertDate(value) {
                return moment(value).format('YYYY/DD/MM');
                // return moment(value).format('MM-DD-YYYY');
            },
            convertTime(value){
                return moment(value).format('HH:MM:SS')
            },
            async save(){
                // console.log(this.form1.forTransportVehicularAccident.ref_veh_acctype_code)
                 console.log(JSON.stringify(this.form1)) 
                // console.log("SAVE this.form1.generalData.status", this.form1.generalData.status)
                // console.log("SAVE this.form1.status", this.form1.status)
                this.form1.generalData.status = this.form1.status
                const json = {
                    json: JSON.stringify(this.form1)
                }
                console.log(JSON.stringify(this.form1))
                // console.log(JSON.stringify(this.form1.generalData.status))
                alert('saved to '+  this.form1.generalData.status)
                // console.log(this.patHeader)
                const response = await axios.post("http://192.168.7.66:8040/api/saveInjuryDataJSON",json)
                return response;
            },
            print(){
                // console.log("print")
                window.print();
            },

            search(nameKey, myArray){
                for (var i=0; i < myArray.length; i++) {
                    if (myArray[i].exportColumn == nameKey) {
                        return myArray[i].value;
                        
                    }
                }
            },
            
            
            

            async getRegionCode(){
                const response = await axios.post("http://192.168.7.66:8040/api/vwRegion")
                return response
            },
            async regionCodeInput(){
                const regcode = {
                    regcode: this.form1.generalData.plc_regcode
                }
                const response = await axios.post("http://192.168.7.66:8040/api/vwProvince", regcode)
                this.provinceCode = response.data
                return response
            },
            async provinceCodeInput(){
                const provcode = {
                    provcode: this.form1.generalData.plc_provcode
                }
                const response = await axios.post("http://192.168.7.66:8040/api/vwCity", provcode)
                this.cityCode = response.data
                return response
            },
            async getCityCode(){
                const response = await axios.post("http://192.168.7.66:8040/api/vwCity")
                return response
            },
            backBtn(){
                console.log("back")
                this.$router.replace('/'); 
            }
        },
        watch: {
            mult_inj(){
                if(this.form1.natureOfInjury.noi_abrasion == 'Y'){
                    this.form1.natureOfInjury.mult_inj = 'Y'
                }
            },
            'form1.natureOfInjury.noi_abrasion'(value) {
                if (value == 'N') {
                    this.form1.natureOfInjury.noi_abradtl = ""
                }
            },
            'form1.natureOfInjury.noi_avulsion'(value){
                if(value == 'N'){
                    this.form1.natureOfInjury.noi_avuldtl = ""
                }
            },
            'form1.natureOfInjury.noi_burn_r'(value){
                if(value == 'N'){
                    this.form1.natureOfInjury.degree_burn1 = ""
                    this.form1.natureOfInjury.degree_burn2 = ""
                    this.form1.natureOfInjury.degree_burn3 = ""
                    this.form1.natureOfInjury.degree_burn4 = ""
                    this.form1.natureOfInjury.noi_burndtl = ""
                }
            },
            'form1.natureOfInjury.noi_concussion'(value){
                if(value == 'N'){
                    this.form1.natureOfInjury.noi_concussiondtl = ""
                }
            },
            'form1.natureOfInjury.noi_contusion'(value){
                if(value == 'N'){
                    this.form1.natureOfInjury.noi_contudtl = ""
                }
            },
            'form1.natureOfInjury.fractureCh'(value){
                if(value == 'N'){
                    this.form1.natureOfInjury.noi_frac_ope = 'N'
                    this.form1.natureOfInjury.noi_fropdtl =""
                    this.form1.natureOfInjury.noi_frac_clo = 'N'
                    this.form1.natureOfInjury.noi_frcldtl = ""
                }
            },
            'form1.natureOfInjury.noi_frac_ope'(value){
                if(value == 'N'){
                    this.form1.natureOfInjury.noi_fropdtl = ""
                }
            },
            'form1.natureOfInjury.noi_frac_clo'(value){
                if(value == 'N'){
                    this.form1.natureOfInjury.noi_frcldtl = ""
                }
            },
            'form1.natureOfInjury.noi_owound'(value){
                if(value == 'N'){
                    this.form1.natureOfInjury.noi_owoudtl = ""
                }
            },
            'form1.natureOfInjury.noi_amp'(value){
                if(value == 'N'){
                    this.form1.natureOfInjury.noi_ampdtl = ""
                }
            },
            'form1.natureOfInjury.noi_others'(value){
                if(value == 'N'){
                    this.form1.natureOfInjury.noi_otherinj = ""
                }
            },
            'form1.ExternalCauseOfInjury.ext_bite'(value){
                if(value== 'N'){
                    this.form1.ExternalCauseOfInjury.ext_bite_sp = ""
                }
            },
            'form1.ExternalCauseOfInjury.ext_burn_r'(value){
                if(value== 'N'){
                    this.form1.ExternalCauseOfInjury.ref_burn_code = false
                    this.form1.ExternalCauseOfInjury.ext_burn_sp = ""
                }
            },
            'form1.ExternalCauseOfInjury.ext_chem'(value){
                if(value == 'N'){
                    this.form1.ExternalCauseOfInjury.ext_chem_sp = ""
                }
            },
            'form1.ExternalCauseOfInjury.ext_sharp'(value){
                if(value == 'N'){
                    this.form1.ExternalCauseOfInjury.ext_sharp_sp = ""
                }
            },
            'form1.ExternalCauseOfInjury.ext_drown_r'(value){
                if(value == 'N'){
                    this.form1.ExternalCauseOfInjury.ref_drowning_cope = false
                    this.form1.ExternalCauseOfInjury.ext_drown_sp = ""
                }
            },
            'form1.ExternalCauseOfInjury.ext_expo_nature_r'(value){
                if(value == 'N'){
                    this.form1.ExternalCauseOfInjury.ext_expo_nature_sp = ""
                }
            },
            'form1.ExternalCauseOfInjury.ext_gun'(value){
                if(value == 'N'){
                    this.form1.ExternalCauseOfInjury.ext_gun_sp = ""
                }
            },
            'form1.ExternalCauseOfInjury.ext_fall'(value){
                if(value == 'N'){
                    this.form1.ExternalCauseOfInjury.ext_falldtl = ""
                }
            },
            'form1.ExternalCauseOfInjury.ext_firecracker_r'(value){
                if(value == 'N'){
                    this.form1.ExternalCauseOfInjury.firecracker_code = false
                    this.form1.ExternalCauseOfInjury.ext_firecracker_sp = ""
                }
            },
            'form1.ExternalCauseOfInjury.ext_other'(value){
                if(value=='N'){
                    this.form1.ExternalCauseOfInjury.ext_other_sp = ""
                }
            },
            'form1.forTransportVehicularAccident.vehicle_code'(value){
                if(value != '88'){
                    this.form1.forTransportVehicularAccident.pat_veh_sp = ""
                }
            },
            'form1.forTransportVehicularAccident.position_code'(value){
                if(value != '88'){
                    this.form1.forTransportVehicularAccident.pos_pat_sp = ""
                }
            },
            'form1.forTransportVehicularAccident.ref_victim'(value){
                if(value != '02'){
                    this.form1.forTransportVehicularAccident.ref_victom_withother = ""
                }
            },
            'form1.forTransportVehicularAccident.place_occ_code'(value){
                if(value != '70'){
                    this.form1.forTransportVehicularAccident.poc_wp_spec = ""
                }
                else if(value != '88'){
                    this.form1.forTransportVehicularAccident.poc_etc_spec = ""
                }
            }      
        },
        computed:{

        },
        mounted(){
            // this.getAllPatientList().then(res => {
                
            //     // this.patHeader = res.data;
            //     // console.log(res.data)
            //     this.patHeader = res.data;
            //     // console.log("res.data",res.data)
            //     const header = this.patHeader.filter((patInfo) => {return this.form1.enccode.toLowerCase().split(" ").every(v => patInfo.enccode1.toLowerCase().includes(v))})
            //     this.patReg = header[0]
            //     // console.log("PATREG ",this.patReg)
            //     return header
            // })
            let user = localStorage.getItem('Token');
            if(!user){
            this.$router.push({name:'Login'})
            }
        }
    }


    //     export default{

    //     }
    //     import {ExportToCsv} from 'export-to-csv'
    //     // var header = name;
    //     var data = [
    //   {
    //     reg_no:'',
    //     hosp_no: '',
    //     pat_last_name: '',
    //     pat_first_name: '',
    //     pat_middle_name: '',
    //     pat_current_address_region: '',
    //     pat_current_address_province: '',
    //     pat_current_address_city: '',
    //     pat_sex: '',
    //     pat_date_of_birth: '',
    //     age_years: '',
    //     age_months: '',
    //     age_days: '',
    //     plc_regcode: '',	
    //     plc_provcode: '',
    //     plc_ctycode: '',
    //     inj_date: '',
    //     inj_time: '',
    //     encounter_date: '',	
    //     encounter_time: '',	
    //     inj_intent_code: '',	
    //     mult_inj: '',	
    //     noi_abrasion: '',	
    //     noi_abradtl: '',	
    //     noi_avulsion: '',	
    //     noi_avuldtl: '',	
    //     noi_burndtl: '',	
    //     noi_concussion: '',	
    //     noi_concussiondtl: '',	
    //     noi_contusion: '',	
    //     noi_contudtl: '',	
    //     noi_frac_clo: '',	
    //     noi_frcldtl: '',	
    //     noi_frac_ope: '',	
    //     noi_fropdtl: '',	
    //     noi_owound: '',	
    //     noi_owoudtl: '',	
    //     noi_amp: '',	
    //     noi_ampdtl: '',	
    //     noi_others: '',	
    //     noi_otherinj: '',	
    //     ext_bite: '',	
    //     ext_bite_sp: '',	
    //     ref_burn_code: '',	
    //     ext_burn_sp: '',	
    //     ext_chem: '',	
    //     ext_chem_sp: '',	
    //     ext_sharp: '',	
    //     ext_sharp_sp: '',	
    //     ref_drowning_cope: '',	
    //     ext_fall: '',	
    //     ext_falldtl: '',	
    //     ext_gun: '',	
    //     ext_gun_sp: '',	
    //     ext_hang: '',	
    //     ext_maul: '',	
    //     ext_transport: '',	
    //     ext_other: '',	
    //     ext_other_sp: '',	
    //     ref_veh_acctype_code: '',	
    //     vehicle_code: '',	
    //     pat_veh_sp: '',	
    //     etc_veh: '',	
    //     etc_veh_sp: '',	
    //     position_code: '',	
    //     pos_pat_sp: '',	
    //     safe_airbag: '',	
    //     safe_cseat: '',	
    //     safe_helmet: '',	
    //     safe_sbelt: '',	
    //     safe_none: '',	
    //     safe_unkn: '',	
    //     safe_other: '',	
    //     safe_other_sp: '',	
    //     place_occ_code: '',	
    //     poc_wp_spec: '',	
    //     poc_etc_spec: '',	
    //     activity_code: '',	
    //     risk_alcliq: '',	
    //     risk_sleep: '',	
    //     risk_smoke: '',	
    //     risk_mobpho: '',	
    //     risk_other: '',	
    //     risk_etc_spec: '',	
    //     trans_ref: '',	
    //     ref_hosp_code: '',	
    //     ref_physician: '',	
    //     status_code: '',	
    //     stat_reachdtl: '',	
    //     diagnosis: '',	
    //     icd_10_nature_er: '',	
    //     disposition_code: '',	
    //     outcome_code: '',	
    //     disp_inpat: '',	
    //     outcome_inpat: '',	
    //     ext_drown_sp: '',	
    //     first_aid_code: '',	
    //     firstaid_others: '',	
    //     firstaid_others2: '',	
    //     ref_expnature_code: '',	
    //     safe_drown: '',	
    //     firecracker_code: '',	
    //     mode_transport_code: '',	
    //     disp_er_sp: '',	
    //     disp_inpat_sp: '',	
    //     comments: '',	
    //     pno: '',	
    //     pre_date: '',	
    //     ptype_code: '',	
    //     status: '',	
    //     hosp_reg_no: '',	
    //     hosp_cas_no: '',	
    //     temp_regcode: '',	
    //     temp_provcode: '',	
    //     temp_citycode: '',	
    //     act_etc_spec: '',	
    //     ref_hosp_code_sp: '',	
    //     disp_inpat_oth: '',	
    //     disp_inpat_sp2: '',	
    //     noi_burn_r: '',	
    //     ext_burn_r: '',	
    //     ext_drown_r: '',	
    //     ext_firecracker_r: '',	
    //     ext_firecracker_sp: '',	
    //     ext_sexual: '',	
    //     vehicle_type_id: '',	
    //     ext_expo_nature_r: '',	
    //     ext_expo_nature_sp: '',	
    //     trans_ref2: '',	
    //     icd_10_external_er: '',	
    //     complete_diagnosis: '',	
    //     icd10_nature_inpatient: '',	
    //     icd_10_ext_inpatient: '',	
    //     disp_er_sp_oth: '',	
    //     time_report: '',	
    //     date_report: '',	
    //     risk_none: '',	
    //     rstatuscode: '',	
    //     tempreg_no: '',	
    //     pat_phil_health_no: '',	
    //     pat_facility_no: '',

    //   },
    // ];

    //   const options = { 
    //     fieldSeparator: ',',
    //     quoteStrings: '"',
    //     decimalSeparator: '.',
    //     showLabels: true, 
    //     // showTitle: true,
    //     // title: 'My Awesome CSV',
    //     useTextFile: false,
    //     useBom: true,
    //     useKeysAsHeaders: true,
    //     // headers: ['Column 1', 'Column 2', etc...] <-- Won't work with useKeysAsHeaders present!
    //   };

    // const csvExporter = new ExportToCsv(options);

    // csvExporter.generateCsv(data);
</script>

<style scoped>
    #divpat {
        column-width: 50%;
        font-size: 15px;
    }

    .divpat {
        font-size: 12px;
    }



    #divsex {
        width: 30%;
    }

    /* #divaddress{
            width: 50%;
        } */
    #divbday {
        width: 50%;
    }

    #inputshort {
        width: 30%;
    }

    #injdate {
        width: 50%;
    }

    @media print {

        /* include this style if you want the first row to be on the same page as whatever precedes it */
        /*
        .rows-print-as-pages .row:first-child {
            page-break-before: avoid;
        }
        */
        .col-lg-6 {
            width: 100%;
        }

        .lastname-pat {
            width: 100%;
        }

    }

    .header {
        background-color: green;
        color: white !important;
    }

    #bgGreen {
        background-color: green !important;
    }

    .innerdiv {
        margin-left: 10px !important;
        font-size:14px !important;
        width: 100% ;
    }

    .labelmarginleft {
        margin-left: 20px !important;
    }

    #docAdmit {
        width: 350px !important;
    }

    .inputlabelunderlineName {
        border: none;
        height: auto;
        width: 130px;
    }

    .inputlabelunderline {
        border: none;
        border-bottom: 1px solid black;
        height: auto;
        width: auto;
    }

    .inputlabelunderline2 {
        border: none;
        border-bottom: 1px solid black;
        height: auto;
        width: 100px;
    }

    .inputlabelunderlinelong {
        border: none;
        border-bottom: 1px solid black;
        height: auto;
        width: 600px;

    }



    #docAdmitCol {
        column-width: 100px;
    }

    #padding {
        padding: 70px;
    }

    .inputlabelunderlinelong::placeholder {
        text-align: center;
    }

    .inputlabelunderline:focus,
    .inputlabelunderline2:focus,
    .inputlabelunderlinelong {
        outline: none;
    }

    .firstAid {
        padding-right: 5px !important;
    }

    .card {
        border: 1px black solid;
    }

    table,
    td,
    tr {
        border: 1px solid black;
    }

    input {
        text-align: center !important;
    }

    .grid-container {
        display: grid;
        grid-template-columns: auto auto auto;
        gap: 10px;
        padding: 2px;
    }

    .grid-container>div {
        /* text-align: center; */
        font-size: 15px;
    }

    .container>div {
        padding: 2px;
    }

    #gridAid {
        display: grid;
        grid-template-columns: 150px 70px 100px 200px;

    }

    .item5 {
        grid-column: auto / span 3;
    }

    #gridInjuries {
        display: grid;
        grid-template-columns: 150px 70px 70px;
    }

    #gridNature {
        grid-template-columns: 280px;
        grid-template-rows: auto auto auto
    }

    #gridBurn {
        display: grid;
        grid-template-columns: 50px 50px 50px 50px 50px;
        grid-template-rows: auto auto
    }

    #gridBurn .item1 {
        grid-column: 1 / span 4;
    }

    #colViIn {
        /* column-width: 100px; */
    }

    /* #divTemprecodeinput,#divTempprocodeinput,#divTemctycodeinput,#divTempbgycodeinput{
    display: none;
} */
    #divaddress {
        width: auto;
    }

    #firstPanel {
        width: auto;
    }

    #popup {
        display: none;
    }

    @media print {
        #mainContainer {
            margin: -40px -20px 0 -20px !important;
            width: auto !important;
            font-size: 10px !important;
        }

        .innerdiv{
            font-size:5px !important;
        }

        #generalData {
            font-size: 10px !important;
        }

        .col-print-12 {
            width: 10px !important;
        }

        #frstAid {
            width: 250px !important;
        }

        #externalDiv {
            page-break-after: always;
        }
        .divpat1 {
            font-size: 12px !important;
        }
        .inputlabelunderline{
            border: none;
            border-bottom: 1px solid black;
            height: auto;
            width: 100px;
        }
    }

    #generalData {
        width: 100%;
        margin: auto;
        font-size: 15px;

    }


</style>