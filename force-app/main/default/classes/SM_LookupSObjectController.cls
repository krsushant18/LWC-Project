public class SM_LookupSObjectController {


    @AuraEnabled
    public static Result[] lookup(String searchString, String sObjectAPIName, String FilterCondition, boolean isClickOnSearch, String fieldToBeQuried, Boolean isAddress) {
        // Sanitze the input
        String sanitizedSearchString = String.isBlank(searchString) ? 'a' : String.escapeSingleQuotes(searchString);
        String sanitizedSObjectAPIName = String.isBlank(sObjectAPIName) ? '' : String.escapeSingleQuotes(sObjectAPIName);
        String sanitizedSObjectFilterCondition = String.isBlank(FilterCondition) ? '' : FilterCondition;

        String searchQuery;
        List < Result > results = new List < Result > ();
        String ActiveProduct = 'Active';
        // Build our SOSL query


        if (isClickOnSearch == true) {
            string orderbyquery = 'ORDER BY LastModifiedDate DESC';
            if (String.isBlank(FilterCondition)) {
                searchQuery = 'SELECT id,name,' + fieldToBeQuried + ' FROM ' + sanitizedSObjectAPIName + ' ' + orderbyquery + ' Limit 10';

            } else {
                searchQuery = 'SELECT id,name,' + fieldToBeQuried + ' FROM ' + sanitizedSObjectAPIName + ' WHERE ' + FilterCondition + ' ' + orderbyquery + ' Limit 10';
            }

            List < sobject > searchList = Database.query(searchQuery);

            for (sobject so: searchList) {
                //system.debug('subStr[1]===='+so.get(subStr[1])); 
                if (isAddress) {
                    results.add(new Result((String) so.get('Name') + '-' + so.get(fieldToBeQuried), so.Id));
                } else {
                    results.add(new Result((String) so.get('Name'), so.Id));
                }
            }

        } else {
            if (String.isBlank(FilterCondition)) {
                //searchQuery = 'FIND \'{"' + sanitizedSearchString +  ' *\'"} \' IN ALL FIELDS RETURNING ' + sanitizedSObjectAPIName + '(id,name) Limit 50'; 
                searchQuery = 'FIND { ' + sanitizedSearchString + '*} IN ALL FIELDS RETURNING ' + sanitizedSObjectAPIName + '(id,name';

                if (fieldToBeQuried != null) {
                    searchQuery += ',' + fieldToBeQuried;
                }

                searchQuery += ') Limit 50';
            } else {
                searchQuery = 'FIND { ' + sanitizedSearchString + '*} IN ALL FIELDS RETURNING ' + sanitizedSObjectAPIName;
                searchQuery += '(id,name';
                if (fieldToBeQuried != null) {
                    searchQuery += ',' + fieldToBeQuried;
                }

                searchQuery += ' WHERE ' + sanitizedSObjectFilterCondition + ' ) Limit 50';

            }

            system.debug('Query ' + searchQuery);
            // Execute the Query
            List < List < sobject >> searchList = search.query(searchQuery);

            // Create a list of matches to return
            for (sobject so: searchList[0]) {
                if (isAddress) {
                    results.add(new Result((String) so.get('Name') + '-' + so.get(fieldToBeQuried), so.Id));
                } else {
                    results.add(new Result((String) so.get('Name'), so.Id));
                }
            }
        }

        return results;
    }

    /**
     * Inner class to wrap up an SObject Label and its Id
     */
    public class Result {
        @AuraEnabled public String SObjectLabel { get;set; }
        @AuraEnabled public Id SObjectId { get;set; }
        @AuraEnabled public String address { get;set; }
        @AuraEnabled public String partySite { get;set; }

        public Result(String sObjectLabel, Id sObjectId) {
            this.SObjectLabel = sObjectLabel;
            this.SObjectId = sObjectId;
        }

        public Result(String sObjectLabel, Id sObjectId, String address) {
            this.SObjectLabel = sObjectLabel;
            this.SObjectId = sObjectId;
            this.address = address;
        }
    }

}