import { Strapi } from '@strapi/strapi'
import { IocContainer } from 'ioc-container'
import { EntityService } from '@strapi/strapi'

export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register({ strapi }: { strapi: Strapi }) {
    const container = IocContainer.getInstance()

    if (strapi.entityService)
      container
        .bind<EntityService.EntityService>('EntityService')
        .toConstantValue(strapi.entityService)
  },
  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap({ strapi }) {},
}
