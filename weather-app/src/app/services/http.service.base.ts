import { mergeMap as _observableMergeMap, catchError as _observableCatch } from 'rxjs/operators';
import { Observable, throwError as _observableThrow, of as _observableOf } from 'rxjs';
import { ApiException } from './dto/api-exception';

export class HttpServiceBase
{
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    public throwException(message: string, status: number, response: string, headers: { [key: string]: any; }, result?: any): Observable<any> {
        if (result !== null && result !== undefined)
            return _observableThrow(result);
        else
            return _observableThrow(new ApiException(message, status, response, headers, null));
      }
      
      public blobToText(blob: any): Observable<string> {
        return new Observable<string>((observer: any) => {
            if (!blob) {
                observer.next("");
                observer.complete();
            } else {
                let reader = new FileReader();
                reader.onload = event => {
                    observer.next((<any>event.target).result);
                    observer.complete();
                };
                reader.readAsText(blob);
            }
        });
      }
      
}