global class scheduledClasstoBatch implements Schedulable {
    
    global void execute(SchedulableContext sc){
        batchExample batchSchedule  = new batchExample(); 
        database.executebatch(batchSchedule, 200);
        
        Datetime sysTime = System.now();
        sysTime = sysTime.addminutes(5);
        String chronExp = '' + sysTime.second() + ' ' + sysTime.minute() + ' ' + sysTime.hour() + ' ' + sysTime.day() + ' ' + sysTime.month() + ' ? ' + sysTime.year();
        String jobName = 'Scheduler to update account records';
        System.Schedule(jobName + sysTime.getTime(), chronExp, new scheduledClasstoBatch());                                 
    }
}