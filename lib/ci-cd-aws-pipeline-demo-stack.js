"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CiCdAwsPipelineDemoStack = void 0;
const cdk = require("aws-cdk-lib");
const pipelines_1 = require("aws-cdk-lib/pipelines");
const pipelines_2 = require("aws-cdk-lib/pipelines");
const stage_1 = require("./stage");
class CiCdAwsPipelineDemoStack extends cdk.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);
        const pipeline = new pipelines_1.CodePipeline(this, 'Pipeline', {
            pipelineName: 'TestPipeline',
            synth: new pipelines_1.ShellStep('Synth', {
                input: pipelines_1.CodePipelineSource.gitHub('alejos4n/ci-cd-aws-pipeline-demo', 'main'),
                commands: ['npm ci',
                    'npm run build',
                    'npx cdk synth']
            })
        });
        const testingStage = pipeline.addStage(new stage_1.MyPipelineAppStage(this, "test", {
            env: { account: "210615636037", region: "us-east-2" }
        }));
        testingStage.addPre(new pipelines_1.ShellStep("Run Unit Tests", { commands: ['npm install', 'npm test'] }));
        testingStage.addPost(new pipelines_2.ManualApprovalStep('Manual approval before production'));
        const prodStage = pipeline.addStage(new stage_1.MyPipelineAppStage(this, "prod", {
            env: { account: "210615636037", region: "us-east-2" }
        }));
    }
}
exports.CiCdAwsPipelineDemoStack = CiCdAwsPipelineDemoStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2ktY2QtYXdzLXBpcGVsaW5lLWRlbW8tc3RhY2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjaS1jZC1hd3MtcGlwZWxpbmUtZGVtby1zdGFjay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxtQ0FBbUM7QUFFbkMscURBQTBGO0FBQzFGLHFEQUEyRDtBQUMzRCxtQ0FBNkM7QUFFN0MsTUFBYSx3QkFBeUIsU0FBUSxHQUFHLENBQUMsS0FBSztJQUNyRCxZQUFZLEtBQWdCLEVBQUUsRUFBVSxFQUFFLEtBQXNCO1FBQzlELEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRXhCLE1BQU0sUUFBUSxHQUFHLElBQUksd0JBQVksQ0FBQyxJQUFJLEVBQUUsVUFBVSxFQUFFO1lBQ2xELFlBQVksRUFBRSxjQUFjO1lBQzVCLEtBQUssRUFBRSxJQUFJLHFCQUFTLENBQUMsT0FBTyxFQUFFO2dCQUM1QixLQUFLLEVBQUUsOEJBQWtCLENBQUMsTUFBTSxDQUFDLGtDQUFrQyxFQUFFLE1BQU0sQ0FBQztnQkFDNUUsUUFBUSxFQUFFLENBQUMsUUFBUTtvQkFDUixlQUFlO29CQUNmLGVBQWUsQ0FBQzthQUM1QixDQUFDO1NBQ0gsQ0FBQyxDQUFDO1FBSUgsTUFBTSxZQUFZLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLDBCQUFrQixDQUFDLElBQUksRUFBRSxNQUFNLEVBQUU7WUFDMUUsR0FBRyxFQUFFLEVBQUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1NBQ3RELENBQUMsQ0FBQyxDQUFDO1FBR0osWUFBWSxDQUFDLE1BQU0sQ0FBQyxJQUFJLHFCQUFTLENBQUMsZ0JBQWdCLEVBQUUsRUFBRSxRQUFRLEVBQUUsQ0FBQyxhQUFhLEVBQUUsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDaEcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLDhCQUFrQixDQUFDLG1DQUFtQyxDQUFDLENBQUMsQ0FBQztRQUVsRixNQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksMEJBQWtCLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRTtZQUN2RSxHQUFHLEVBQUUsRUFBRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7U0FDdEQsQ0FBQyxDQUFDLENBQUM7SUFDTixDQUFDO0NBQ0Y7QUE1QkQsNERBNEJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgY2RrIGZyb20gJ2F3cy1jZGstbGliJztcbmltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gJ2NvbnN0cnVjdHMnO1xuaW1wb3J0IHsgQ29kZVBpcGVsaW5lLCBDb2RlUGlwZWxpbmVTb3VyY2UsIFNoZWxsU3RlcCwgU3RlcCB9IGZyb20gJ2F3cy1jZGstbGliL3BpcGVsaW5lcyc7XG5pbXBvcnQgeyBNYW51YWxBcHByb3ZhbFN0ZXAgfSBmcm9tICdhd3MtY2RrLWxpYi9waXBlbGluZXMnO1xuaW1wb3J0IHsgTXlQaXBlbGluZUFwcFN0YWdlIH0gZnJvbSAnLi9zdGFnZSc7XG5cbmV4cG9ydCBjbGFzcyBDaUNkQXdzUGlwZWxpbmVEZW1vU3RhY2sgZXh0ZW5kcyBjZGsuU3RhY2sge1xuICBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wcz86IGNkay5TdGFja1Byb3BzKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCBwcm9wcyk7XG5cbiAgICBjb25zdCBwaXBlbGluZSA9IG5ldyBDb2RlUGlwZWxpbmUodGhpcywgJ1BpcGVsaW5lJywge1xuICAgICAgcGlwZWxpbmVOYW1lOiAnVGVzdFBpcGVsaW5lJyxcbiAgICAgIHN5bnRoOiBuZXcgU2hlbGxTdGVwKCdTeW50aCcsIHtcbiAgICAgICAgaW5wdXQ6IENvZGVQaXBlbGluZVNvdXJjZS5naXRIdWIoJ2FsZWpvczRuL2NpLWNkLWF3cy1waXBlbGluZS1kZW1vJywgJ21haW4nKSwgLy9SZW1lbWJlciB0byBjaGFuZ2UgXG4gICAgICAgIGNvbW1hbmRzOiBbJ25wbSBjaScsIFxuICAgICAgICAgICAgICAgICAgICducG0gcnVuIGJ1aWxkJywgXG4gICAgICAgICAgICAgICAgICAgJ25weCBjZGsgc3ludGgnXVxuICAgICAgfSlcbiAgICB9KTtcblxuXG5cbiAgICBjb25zdCB0ZXN0aW5nU3RhZ2UgPSBwaXBlbGluZS5hZGRTdGFnZShuZXcgTXlQaXBlbGluZUFwcFN0YWdlKHRoaXMsIFwidGVzdFwiLCB7XG4gICAgICBlbnY6IHsgYWNjb3VudDogXCIyMTA2MTU2MzYwMzdcIiwgcmVnaW9uOiBcInVzLWVhc3QtMlwiIH1cbiAgICB9KSk7XG5cblxuICAgIHRlc3RpbmdTdGFnZS5hZGRQcmUobmV3IFNoZWxsU3RlcChcIlJ1biBVbml0IFRlc3RzXCIsIHsgY29tbWFuZHM6IFsnbnBtIGluc3RhbGwnLCAnbnBtIHRlc3QnXSB9KSk7XG4gICAgdGVzdGluZ1N0YWdlLmFkZFBvc3QobmV3IE1hbnVhbEFwcHJvdmFsU3RlcCgnTWFudWFsIGFwcHJvdmFsIGJlZm9yZSBwcm9kdWN0aW9uJykpO1xuXG4gICAgY29uc3QgcHJvZFN0YWdlID0gcGlwZWxpbmUuYWRkU3RhZ2UobmV3IE15UGlwZWxpbmVBcHBTdGFnZSh0aGlzLCBcInByb2RcIiwge1xuICAgICAgZW52OiB7IGFjY291bnQ6IFwiMjEwNjE1NjM2MDM3XCIsIHJlZ2lvbjogXCJ1cy1lYXN0LTJcIiB9IFxuICAgIH0pKTtcbiAgfVxufSJdfQ==