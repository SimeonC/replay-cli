export type UnstructuredMetadata = Record<string, unknown>;

export interface CommandLineOptions {
  /**
   * Alternate recording directory
   */
  directory?: string;

  /**
   * Alternate server to upload recordings to
   */
  server?: string;

  /**
   * Authentication API Key
   */
  apiKey?: string;

  /**
   * JSON output
   */
  json?: boolean;
}

export interface NodeOptions {
  verbose?: boolean;
  agent?: any;
}

export type Options = CommandLineOptions & NodeOptions;

export interface SourcemapUploadOptions {
  group: string;
  dryRun?: boolean;
  extensions?: Array<string>;
  ignore?: Array<string>;
  quiet?: boolean;
  verbose?: boolean;
  root?: string;
}

export interface MetadataOptions {
  init?: string;
  keys?: string[];
  warn?: boolean;
  verbose?: boolean;
}

export interface FilterOptions {
  filter?: string;
}

export interface ListOptions extends FilterOptions {
  all?: boolean;
}

export interface UploadOptions extends FilterOptions {
  batchSize?: number;
}

/**
 * Supported replay browsers
 */
export type BrowserName = "chromium" | "firefox";

export type Runner = "playwright" | "puppeteer";

export interface RecordingMetadata {
  recordingData: {
    id?: string;
    duration?: number;
    url?: string;
    title?: string;
    operations: object | null;
    lastScreenData?: string;
    lastScreenMimeType: string;
  };
  metadata: UnstructuredMetadata;
}

export interface OriginalSourceEntry {
  path: string;
  parentOffset: number;
}

export interface SourceMapEntry {
  id: string;
  path: string;
  baseURL: string;
  targetContentHash?: string;
  targetURLHash?: string;
  targetMapURLHash: string;
  originalSources: OriginalSourceEntry[];
}

export interface RecordingEntry {
  id: string;
  createTime: Date;
  runtime: string;
  metadata: UnstructuredMetadata;
  sourcemaps: SourceMapEntry[];
  buildId?: string;
  status:
    | "onDisk"
    | "unknown"
    | "uploaded"
    | "crashed"
    | "startedWrite"
    | "startedUpload"
    | "crashUploaded"
    | "unusable";
  path?: string;
  server?: string;
  recordingId?: string;
  crashData?: any[];
  unusableReason?: string;
}

export type ExternalRecordingEntry = Omit<RecordingEntry, "buildId" | "crashData">;
