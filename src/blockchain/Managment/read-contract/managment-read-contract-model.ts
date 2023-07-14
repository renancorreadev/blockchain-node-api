export interface IManagementReadContract {
  getFee(): Promise<number>;
  isPaused(): Promise<boolean>;
}