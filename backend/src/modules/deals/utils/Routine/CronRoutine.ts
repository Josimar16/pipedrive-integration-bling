import { CronJob } from 'cron';
import format from 'date-fns/format';
import { container } from 'tsyringe';
import { CreateDealUseCase } from '../../useCases/createDeal/CreateDealUseCase';
import { CreateReportUseCase } from '../../useCases/createReport/CreateReportUseCase';
import { ListReportsByDateUseCase } from '../../useCases/listReportsByDate/ListReportsByDateUseCase';

function CronRoutineInsertion() {
  return new CronJob('* */55 */22 * * *', async () => {

    // Create Deals
    const createDealUseCase = container.resolve(CreateDealUseCase);
    await createDealUseCase.execute();
    // Create Report
    const dateFormatted = new Date(format(new Date, 'yyyy-MM-dd'));
    const createReportUseCase = container.resolve(CreateReportUseCase);
    await createReportUseCase.execute(dateFormatted)

  }, null, true, 'America/Fortaleza');
}

function CronRoutineSelection() {
  return new CronJob('* * */23 * * *', async () => {

    const dateFormatted = new Date(format(new Date, 'yyyy-MM-dd'));
    const listReportsByDateUseCase = container.resolve(ListReportsByDateUseCase);
    await listReportsByDateUseCase.execute(dateFormatted)

  }, null, true, 'America/Fortaleza');
}

export { CronRoutineInsertion, CronRoutineSelection }